import {StyleSheet} from 'react-native';
import {GREEN} from '../../theme/colors';

const styles = () =>
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
      color: GREEN,
      marginTop: 5,
    },
  });
export default styles;
