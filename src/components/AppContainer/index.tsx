import {View, ViewProps} from 'react-native';
import {FC} from 'react';
import styles from './styles';
import * as React from 'react';

declare interface AppContainerProps extends ViewProps {
  isDarkMode: boolean;
}

const AppContainer: FC<AppContainerProps> = ({...props}) => {
  const style = styles();
  return <View style={[style.container, props.style]}>{props.children}</View>;
};

export default AppContainer;
