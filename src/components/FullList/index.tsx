import {
  DefaultSectionT,
  ListRenderItem,
  SectionList,
  SectionListData,
  SectionListProps, SectionListRenderItemInfo,
  Text, TextProps,
  useColorScheme,
  View,
  ViewProps
} from "react-native";
import { TABOOLA, TABOOLA_FEED } from "../../constants";
import * as React from "react";
import { FC } from "react";
import { ListItem } from "../../API";
import Carousel from "../carousel";
import TaboolaWidget from "../taboolaWidget";
import AppText from "../AppText";
import TaboolaFeed from "../TaboolaFeed";
import styles from "./styles";
import Widget from "../Widget";

declare interface ItemsListProps extends SectionListProps<ListItem> {

}

type RenderSectionHeader<ItemT> =
  ((info: { section: SectionListData<ItemT, DefaultSectionT> }) => React.ReactElement | null)
  | undefined;


const FullList: FC<ItemsListProps> = ({
                                        ...props
                                      }) => {
  const isDarkMode = useColorScheme() === "dark";
  const style = styles(isDarkMode);

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <SectionList
        {...props}
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        removeClippedSubviews={false}
        stickySectionHeadersEnabled={false}
        ListEmptyComponent={ListEmptyComponent}
        renderSectionHeader={renderHorizontalRow}
        renderItem={renderLastItem}
      />
    </View>
  );
};


const renderListItem: ListRenderItem<ListItem> = ({ item }) => {
  if (item.title.rendered === TABOOLA_FEED) {
    return null;
  }
  return item.title.rendered === TABOOLA ? (
    <TaboolaWidget />
  ) : (
    <Widget {...item} />

  );
};


const ListEmptyComponent: FC<ViewProps & TextProps> = ({ ...props }) =>
  <View
    style={{ justifyContent: "center", alignContent: "center", flex: 1, alignItems: "center", alignSelf: "center" }}>
    <AppText style={{ flex: 1 }}>
      No results!
    </AppText>
  </View>;


const renderHorizontalRow: RenderSectionHeader<ListItem> = ({ section }) => (
  <Carousel
    style={{ flex: 1 }}
    keyExtractor={({ id }) => id.toString()}
    data={section.data}
    renderItem={renderListItem}
  />
);

const renderLastItem: ({ item }: { item: ListItem }) => (JSX.Element | null) = ({ item }) => {
  if (item.title.rendered === TABOOLA_FEED) {
    return <TaboolaFeed />;
  } else {
    return null;
  }


};


export default FullList;
