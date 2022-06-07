import {
  DefaultSectionT,
  ListRenderItem,
  SectionList,
  SectionListData,
  SectionListProps,
  TextProps,
  View,
  ViewProps,
} from 'react-native';
import {TABOOLA, TABOOLA_FEED} from '../../constants';
import * as React from 'react';
import {FC} from 'react';
import {ListItem} from '../../API';
import Carousel from '../carousel';
import TaboolaWidget from '../taboolaWidget';
import AppText from '../AppText';
import TaboolaFeed from '../TaboolaFeed';
import styles from './styles';
import Widget from '../Widget';

declare interface ItemsListProps extends SectionListProps<ListItem> {}

type RenderSectionHeader<ItemT> =
  | ((info: {
      section: SectionListData<ItemT, DefaultSectionT>;
    }) => React.ReactElement | null)
  | undefined;

const FullList: FC<ItemsListProps> = ({...props}) => {
  return (
    <View style={styles.container}>
      <SectionList
        {...props}
        style={styles.carousel}
        contentContainerStyle={styles.contentContainerStyle}
        removeClippedSubviews={false}
        stickySectionHeadersEnabled={false}
        ListEmptyComponent={ListEmptyComponent}
        renderSectionHeader={renderHorizontalRow}
        renderItem={renderLastItem}
      />
    </View>
  );
};

const renderListItem: ListRenderItem<ListItem> = ({item}) => {
  if (item.title.rendered === TABOOLA_FEED) {
    return null;
  }
  return item.title.rendered === TABOOLA ? (
    <TaboolaWidget />
  ) : (
    <Widget {...item} />
  );
};

const ListEmptyComponent: FC<ViewProps & TextProps> = ({...props}) => (
  <View {...props} style={styles.emptyList}>
    <AppText style={styles.carousel}>No results!</AppText>
  </View>
);

const renderHorizontalRow: RenderSectionHeader<ListItem> = ({section}) => (
  <Carousel
    style={styles.carousel}
    keyExtractor={({id}) => id.toString()}
    data={section.data}
    renderItem={renderListItem}
  />
);

const renderLastItem: ({item}: {item: ListItem}) => JSX.Element | null = ({
  item,
}) => {
  if (item.title.rendered === TABOOLA_FEED) {
    return <TaboolaFeed />;
  } else {
    return null;
  }
};

export default FullList;
