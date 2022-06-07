import {FlatList, FlatListProps, useColorScheme, View} from 'react-native';
import * as React from 'react';
import {FC} from 'react';
import {ListItem} from '../../API';
import styles from '../container/styles';

declare interface CarouselProps extends FlatListProps<ListItem> {}

const Carousel: FC<CarouselProps> = ({...props}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const style = styles(isDarkMode);

  return (
    <View style={style.container}>
      <FlatList
        {...props}
        nestedScrollEnabled={true}
        removeClippedSubviews={false}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Carousel;
