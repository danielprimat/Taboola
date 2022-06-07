import {StyleSheet} from 'react-native';
import {DARK_TEXT, LIGHT_TEXT} from '../../theme/colors';

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
      color: isDarkMode ? DARK_TEXT : LIGHT_TEXT,
      marginTop: 5,
    },
  });
export default styles;
