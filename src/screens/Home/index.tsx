import {
  ActivityIndicator,
  StyleSheet,
  useColorScheme,
  View
} from "react-native";
import * as React from "react";
import { FC, useCallback, useState } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../hooks/useStore";
import { useNavigation } from "@react-navigation/native";
import { RequestStatus } from "../../store/ListStore";
import AppText from "../../components/AppText";
import AppInput from "../../components/AppInput";
import AppContainer from "../../components/container";
import AppBlurView from "../../components/AppBlurView";
import AppKeyboardAvoidingView from "../../components/AppKeyboardAvoidingView";
import FullList from "../../components/FullList";
import AppButton from "../../components/AppButton";
import { SPINNER_COLOR } from "../../theme/colors";

const Home: FC = () => {
  const listStore = useStore("listStore");
  const configStore = useStore("configStore");
  const navigation = useNavigation();
  const [isFocusInput, setIsFocusInput] = useState<boolean>(false);
  const isDarkMode = useColorScheme() === "dark";

  const onSearchPress = useCallback(
    () => {
      navigation.navigate("SearchResults");
      setIsFocusInput(false);
    },
    []
  );


  return (

    <AppKeyboardAvoidingView>
      <AppContainer isDarkMode={isDarkMode}>

        {!!configStore.userName && <AppText>
          Welcome {configStore.userName}
        </AppText>}
        {listStore.requestStatus === RequestStatus.loading ?
          <ActivityIndicator style={{ justifyContent: "center", flex: 1 }} size="large" color={SPINNER_COLOR} /> :
          <>
            <FullList sections={listStore.formattedList} />

            {isFocusInput && <AppBlurView isDarkMode={isDarkMode} />}

            <View style={{ flexDirection: "row" }}>
              <AppInput
                onEndEditing={onSearchPress}
                onBlur={() => {
                  setIsFocusInput(false);
                }}
                onFocus={() => setIsFocusInput(true)}
                style={styles.input}
                onChangeText={(v) => listStore.setTargetValue(v)}
                placeholder={"search for a place"}

              />

              <AppButton
                onPress={onSearchPress}
                title={"Search"}
                style={{
                  justifyContent: "center",
                  backgroundColor: "grey",
                  borderRadius: 10,
                  borderBottomLeftRadius: 0,
                  borderTopLeftRadius: 0
                }} />
            </View>
          </>}
      </AppContainer>

    </AppKeyboardAvoidingView>
  );
};


export const styles = StyleSheet.create({

  input: {
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    height: 40,
    width: "80%",
    borderRadius: 10,
    backgroundColor: "grey"

  }
});
export default observer(Home);





