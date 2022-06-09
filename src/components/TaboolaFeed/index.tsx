import RNTaboolaView from '@taboola/react-native-taboola';
import * as React from 'react';
import {FC} from 'react';
import {Dimensions, useColorScheme, View} from 'react-native';
import styles from './styles';

declare interface TaboolaFeedProps {}

const TaboolaFeed: FC<TaboolaFeedProps> = ({}) => {
  const feedHeight = Dimensions.get('window').height * 2;
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <RNTaboolaView
        mode="alternating-widget-without-video-1x4"
        publisher="sdk-tester-demo"
        pageType="article"
        pageUrl="https://blog.taboola.com"
        placement="Mid Article"
        targetType="mix"
        interceptScroll={true}
        style={{height: feedHeight, width: '100%'}}
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

export default TaboolaFeed;
