import {FC} from 'react';
import * as React from 'react';
import {
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
import AppContainer from '../../components/container';
import AppKeyboardAvoidingView from '../../components/AppKeyboardAvoidingView';
import AppInfoModule from '../../modules/AppInfoModule';
import DarkModeModule from '../../modules/darkMode.android';
import {
  GRAY,
  SWITCH_DARK_MODE,
  SWITCH_IOS,
  SWITCH_LIGHT_MODE,
  trackColor,
  trackColor2,
} from '../../theme/colors';

const SettingsScreen: FC = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const configStore = useStore('configStore');
  return (
    <AppKeyboardAvoidingView>
      <SettingsItemContainer>
        <AppText style={styles.appText}>Please enter your name</AppText>

        <AppInput
          style={styles.input}
          onChangeText={v => {
            configStore.setUseName(v);
          }}
          placeholder={configStore.userName}
        />
      </SettingsItemContainer>
      <Button
        title="Save"
        onPress={() => {
          configStore.saveUserNameAsyncStorage();
        }}
      />
      <AppContainer style={styles.appContainer} isDarkMode={isDarkMode}>
        <SettingsItemContainer>
          <AppText style={styles.appText}>App Name</AppText>
          <AppText>{AppInfoModule.appName}</AppText>
        </SettingsItemContainer>
        <SettingsItemContainer>
          <AppText style={styles.appText}>App version</AppText>
          <AppText>{AppInfoModule.appVersion}</AppText>
        </SettingsItemContainer>

        <SettingsItemContainer>
          <AppText style={styles.appText}>Switch to dark mode</AppText>
          <Switch
            trackColor={{false: trackColor, true: trackColor2}}
            thumbColor={isDarkMode ? SWITCH_DARK_MODE : SWITCH_LIGHT_MODE}
            ios_backgroundColor={SWITCH_IOS}
            onValueChange={() => {
              Platform.OS === 'ios'
                ? Linking.openURL('App-Prefs:DISPLAY')
                : DarkModeModule.setNightMode(!isDarkMode);
              configStore.setIsDarkMode(isDarkMode);
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
    backgroundColor: GRAY,
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
