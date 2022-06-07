import {
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import AppText from '../AppText';
import * as React from 'react';
import {FC} from 'react';
declare interface AppButtonProps extends TouchableOpacityProps {
  title: string;
  titleStyle?: TextStyle;
}
const AppButton: FC<AppButtonProps> = ({titleStyle, title, ...props}) => {
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <AppText style={titleStyle}>{title}</AppText>
    </TouchableOpacity>
  );
};

export default AppButton;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: 'grey',
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
  },
});
