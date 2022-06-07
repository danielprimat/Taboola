import {Image, View} from 'react-native';

import {FALLBACK_IMAGE} from '../../constants';
import * as React from 'react';
import {ListItem} from '../../API';
import {FC} from 'react';
import AppText from '../AppText';
import styles from './styles';
import {useStore} from '../../hooks/useStore';

const Widget: FC<ListItem> = ({gallery, title}) => {
  const {isDarkMode} = useStore('configStore');

  const style = styles(isDarkMode);
  return (
    <View style={style.item}>
      <Image
        source={{
          uri: gallery.length > 0 ? gallery[0].thumb : FALLBACK_IMAGE,
        }}
        style={style.itemPhoto}
        resizeMode="contain"
      />
      <AppText style={style.itemText}>{title?.rendered}</AppText>
    </View>
  );
};

export default Widget;
