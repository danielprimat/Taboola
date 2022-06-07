import RNTaboolaView from '@taboola/react-native-taboola';
import * as React from 'react';
import {View} from 'react-native';
import {FC} from 'react';
import styles from './styles';
import {useStore} from '../../hooks/useStore';

const TaboolaWidget: FC = () => {
  const {isDarkMode} = useStore('configStore');

  return (
    <View style={styles.container}>
      <RNTaboolaView
        removeClippedSubviews={false}
        mode="alternating-widget-without-video-1-on-1"
        publisher="sdk-tester"
        pageType="article"
        pageUrl="https://blog.taboola.com"
        placement="Mid Article"
        targetType="mix"
        style={styles.taboolaView}
        viewID="12345"
        darkMode={isDarkMode}
        onDidLoad={event => {
          // Set the height of the widget dynamically
          // setHeight(parseInt(event.nativeEvent.height, 10));
          console.warn(
            'onDidLoad : ' +
              event.nativeEvent.placementName +
              '- height -: ' +
              event.nativeEvent.height,
          );
        }}
        onDidFailToLoad={event => {
          console.warn(
            'onRenderFail placementName: ' + event.nativeEvent.placementName,
          );
          console.warn('onRenderFail error: ' + event.nativeEvent.error);
        }}
      />
    </View>
  );
};

export default TaboolaWidget;
