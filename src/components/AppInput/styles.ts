import { StyleSheet } from "react-native";

const styles = (isDarkMode: boolean) => (
  StyleSheet.create({
    input: {
      height: 40,
      width: "80%",
      borderRadius: 10,
      backgroundColor: "grey"

    },
    homeInput:{
      borderBottomRightRadius: 0,
      borderTopRightRadius: 0,
      height: 40,
      width: "80%",
      borderRadius: 10,
      backgroundColor: "grey"
    }

  })
);
export default styles;
