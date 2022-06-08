import {Text, TextProps, useColorScheme} from 'react-native';
import {FC} from 'react';
import * as React from 'react';
import styles from './styles';

declare interface AppTextProps extends TextProps {}

const AppText: FC<AppTextProps> = ({...props}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const style = styles(isDarkMode);

  return (
    <Text {...props} style={[style.textStyle, props.style]}>
      {props.children}
    </Text>
  );
};

export default AppText;
