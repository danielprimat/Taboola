import {FC, useState} from 'react';
import * as React from 'react';
import {
  Alert,
  Button,
  Linking,
  Platform,
  StyleSheet,
  Switch,
  useColorScheme,
  View,
  ViewProps,
} from 'react-native';
import {useStore} from '../../hooks/useStore';
import AppText from '../../components/AppText';
import AppInput from '../../components/AppInput';
import AppKeyboardAvoidingView from '../../components/AppKeyboardAvoidingView';
import AppInfoModule from '../../modules/AppInfoModule';
import DarkModeModule from '../../modules/darkMode.android';
import colors from '../../theme';
import {
  APP_NAME,
  APP_VERSION,
  DARK_MODE,
  PLEASE_ENTER_YOUR_NAME,
  SAVE,
  SETTINGS_DISPLAY_PATH,
} from '../../constants';

import AppContainer from '../../components/AppContainer';

const SettingsScreen: FC = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const configStore = useStore('configStore');
  const [userNameLocal, setUserName] = useState<string>('');
  return (
    <AppKeyboardAvoidingView>
      <SettingsItemContainer>
        <AppText style={styles.appText}>{PLEASE_ENTER_YOUR_NAME}</AppText>

        <AppInput
          textContentType={'name'}
          style={styles.input}
          onChangeText={setUserName}
          placeholder={configStore.userName}
        />
      </SettingsItemContainer>
      <Button
        title={SAVE}
        onPress={() => {
          configStore
            .saveUserNameAsyncStorage(userNameLocal)
            .then(isUserSaved => {
              if (isUserSaved) {
                Alert.alert('user is Saved');
              } else {
                Alert.alert('name is not valid');
              }
            });
        }}
      />
      <AppContainer style={styles.appContainer} isDarkMode={isDarkMode}>
        <SettingsItemContainer>
          <AppText style={styles.appText}>{APP_NAME}</AppText>
          <AppText>{AppInfoModule.appName}</AppText>
        </SettingsItemContainer>
        <SettingsItemContainer>
          <AppText style={styles.appText}>{APP_VERSION}</AppText>
          <AppText>{AppInfoModule.appVersion}</AppText>
        </SettingsItemContainer>

        <SettingsItemContainer>
          <AppText style={styles.appText}>{DARK_MODE}</AppText>
          <Switch
            trackColor={{false: colors.trackColor, true: colors.trackColor2}}
            thumbColor={
              isDarkMode ? colors.SWITCH_DARK_MODE : colors.SWITCH_LIGHT_MODE
            }
            ios_backgroundColor={colors.SWITCH_IOS}
            onValueChange={() => {
              Platform.OS === 'ios'
                ? Linking.openURL(SETTINGS_DISPLAY_PATH)
                : DarkModeModule.setNightMode(!isDarkMode);
            }}
            value={isDarkMode}
          />
        </SettingsItemContainer>
      </AppContainer>
    </AppKeyboardAvoidingView>
  );
};

export default SettingsScreen;

const SettingsItemContainer: FC<ViewProps> = ({...props}) => {
  return <View style={styles.settings}>{props.children}</View>;
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    flex: 0.9,
    borderRadius: 10,
    backgroundColor: colors.GRAY,
  },
  settings: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
    justifyContent: 'space-around',
  },
  appText: {
    flex: 1,
  },
  appContainer: {
    padding: 20,
  },
});
