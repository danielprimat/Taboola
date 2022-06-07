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
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => {
              Platform.OS === 'ios'
                ? Linking.openURL('App-Prefs:DISPLAY')
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
    backgroundColor: 'grey',
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
