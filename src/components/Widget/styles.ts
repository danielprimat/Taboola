import {StyleSheet} from 'react-native';
import colors from '../../theme';

const styles = (isDarkMode: boolean) =>
  StyleSheet.create({
    item: {
      margin: 10,
      alignItems: 'center',
    },
    itemPhoto: {
      width: 200,
      height: 200,
    },
    itemText: {
      color: isDarkMode ? colors.DARK_TEXT : colors.LIGHT_TEXT,
      marginTop: 5,
    },
  });
export default styles;
