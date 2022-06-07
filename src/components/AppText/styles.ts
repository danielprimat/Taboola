import { StyleSheet } from "react-native";
import { DARK_TEXT, LIGHT_TEXT } from "../../theme/colors";

const styles = (isDarkMode: boolean) => (
  StyleSheet.create({
    textStyle: {
      color: isDarkMode ? DARK_TEXT : LIGHT_TEXT

    }

  })
);
export default styles
