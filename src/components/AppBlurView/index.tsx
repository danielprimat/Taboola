import {BlurView, BlurViewProperties} from '@react-native-community/blur';
import * as React from 'react';
import {FC} from 'react';
import {StyleSheet} from 'react-native';
import {WHITE} from '../../theme/colors';

declare interface AppBlurViewProps extends BlurViewProperties {
  isDarkMode: boolean;
}

const AppBlurView: FC<AppBlurViewProps> = ({isDarkMode, ...props}) => {
  return (
    <BlurView
      {...props}
      style={styles.absolute}
      blurType={isDarkMode ? 'dark' : 'light'}
      blurAmount={10}
      reducedTransparencyFallbackColor={WHITE}
    />
  );
};

export default AppBlurView;

export const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
