import {StyleSheet} from 'react-native';
import colors from '../../theme';

const styles = (isDarkMode: boolean) =>
  StyleSheet.create({
    textStyle: {
      color: isDarkMode ? colors.DARK_TEXT : colors.LIGHT_TEXT,
    },
  });
export default styles;
