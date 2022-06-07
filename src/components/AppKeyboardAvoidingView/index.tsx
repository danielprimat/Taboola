import {FC} from 'react';
import {
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  Platform,
  StyleSheet,
} from 'react-native';
import * as React from 'react';

declare interface AppKeyboardAvoidingView extends KeyboardAvoidingViewProps {}

const AppKeyboardAvoidingView: FC<AppKeyboardAvoidingView> = ({...props}) => {
  return (
    <KeyboardAvoidingView
      {...props}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      keyboardVerticalOffset={100}>
      {props.children}
    </KeyboardAvoidingView>
  );
};

export default AppKeyboardAvoidingView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
