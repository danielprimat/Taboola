import { StyleSheet, TextInput, TextInputProps, useColorScheme } from "react-native";
import * as React from "react";
import { FC } from "react";
import { DARK_TEXT, LIGHT_TEXT } from "../../theme/colors";
import styles from "./styles";

const AppInput: FC<TextInputProps> = ({ ...props }) => {
  const isDarkMode = useColorScheme() === "dark";
  const style = styles(isDarkMode);

  return (
    <TextInput clearButtonMode={"always"}  {...props} style={[style.input, props.style]}
               {...props}

    />
  );
};

export default AppInput;



