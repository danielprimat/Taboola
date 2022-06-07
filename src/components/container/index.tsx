import {View, ViewProps} from 'react-native';
import {FC} from 'react';
import styles from './styles';
import * as React from 'react';

declare interface AppContainerProps extends ViewProps {
  isDarkMode: boolean;
}

const AppContainer: FC<AppContainerProps> = ({isDarkMode, ...props}) => {
  const style = styles(isDarkMode);
  return <View style={[style.container, props.style]}>{props.children}</View>;
};

export default AppContainer;
