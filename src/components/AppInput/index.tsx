import {TextInput, TextInputProps} from 'react-native';
import * as React from 'react';
import {FC} from 'react';
import styles from './styles';

const AppInput: FC<TextInputProps> = ({...props}) => {
  return (
    <TextInput
      clearButtonMode={'always'}
      {...props}
      style={[styles.input, props.style]}
      {...props}
    />
  );
};

export default AppInput;
