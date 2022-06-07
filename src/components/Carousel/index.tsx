import {FlatList, FlatListProps, View} from 'react-native';
import * as React from 'react';
import {FC} from 'react';
import {ListItem} from '../../API';
import styles from './styles';

declare interface CarouselProps extends FlatListProps<ListItem> {}

const Carousel: FC<CarouselProps> = ({...props}) => {
  const style = styles();

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
