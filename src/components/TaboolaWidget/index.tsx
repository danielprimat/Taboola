import RNTaboolaView from '@taboola/react-native-taboola';
import * as React from 'react';
import {useColorScheme, View} from 'react-native';
import {FC} from 'react';
import styles from './styles';

const TaboolaWidget: FC = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <RNTaboolaView
        extraProperties={{enableHorizontalScroll: 'true'}}
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
        onItemClick={e => {
          console.log(e);
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
