import {StyleSheet} from 'react-native';
import {GRAY} from '../../theme/colors';

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '80%',
    borderRadius: 10,
    backgroundColor: GRAY,
  },
  homeInput: {
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    height: 40,
    width: '80%',
    borderRadius: 10,
    backgroundColor: GRAY,
  },
});
export default styles;
