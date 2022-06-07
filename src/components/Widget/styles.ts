import { StyleSheet } from "react-native";

const styles = (isDarkMode: boolean) => (
  StyleSheet.create({
    item: {
      margin: 10,
      alignItems: "center"
    },
    itemPhoto: {
      width: 200,
      height: 200


    },
    itemText: {
      color: "green",
      marginTop: 5
    },

  })
);
export default styles
