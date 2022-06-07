import {Text, TextProps} from 'react-native';
import {FC} from 'react';
import * as React from 'react';
import styles from './styles';
import {useStore} from '../../hooks/useStore';

declare interface AppTextProps extends TextProps {}

const AppText: FC<AppTextProps> = ({...props}) => {
  const {isDarkMode} = useStore('configStore');
  const style = styles(isDarkMode);

  return (
    <Text {...props} style={[style.textStyle, props.style]}>
      {props.children}
    </Text>
  );
};

export default AppText;
