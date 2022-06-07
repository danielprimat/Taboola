import { StyleSheet } from "react-native";
import AppButton from "./index";

const styles = (isDarkMode: boolean) => (
  StyleSheet.create({
    AppButtonHome: {
      justifyContent: "center",
      backgroundColor: "grey",
      borderRadius: 10,
      borderBottomLeftRadius: 0,
      borderTopLeftRadius: 0

    }


  })
);
export default styles;
