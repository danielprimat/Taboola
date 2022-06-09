import {
  ActivityIndicator,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import * as React from 'react';
import {FC, useCallback, useState} from 'react';
import {observer} from 'mobx-react-lite';
import {useStore} from '../../hooks/useStore';
import {useNavigation} from '@react-navigation/native';
import {RequestStatus} from '../../store/ListStore';
import AppText from '../../components/AppText';
import AppInput from '../../components/AppInput';
import AppBlurView from '../../components/AppBlurView';
import AppKeyboardAvoidingView from '../../components/AppKeyboardAvoidingView';
import FullList from '../../components/FullList';
import AppButton from '../../components/AppButton';
import {GRAY, SPINNER_COLOR} from '../../theme';
import AppContainer from '../../components/AppContainer';
import {SEARCH, SEARCH_PLACEHOLDER, WELCOME} from '../../constants';

const Home: FC = () => {
  const listStore = useStore('listStore');
  const configStore = useStore('configStore');
  const navigation = useNavigation();
  const [isFocusInput, setIsFocusInput] = useState<boolean>(false);
  const isDarkMode = useColorScheme() === 'dark';

  const onSearchPress = useCallback(() => {
    navigation.navigate('SearchResults');
    setIsFocusInput(false);
  }, [navigation]);

  return (
    <AppKeyboardAvoidingView>
      <AppContainer isDarkMode={isDarkMode}>
        {!!configStore.userName && (
          <AppText>
            {WELCOME} {configStore.userName}!
          </AppText>
        )}
        {listStore.requestStatus === RequestStatus.loading ? (
          <ActivityIndicator
            style={styles.spinner}
            size="large"
            color={SPINNER_COLOR}
          />
        ) : (
          <>
            <FullList sections={listStore.formattedList} />

            {isFocusInput && <AppBlurView isDarkMode={isDarkMode} />}

            <View style={styles.controllerContainer}>
              <AppInput
                onEndEditing={onSearchPress}
                onBlur={() => {
                  setIsFocusInput(false);
                }}
                onFocus={() => setIsFocusInput(true)}
                style={styles.input}
                onChangeText={v => listStore.setTargetValue(v)}
                placeholder={SEARCH_PLACEHOLDER}
              />

              <AppButton
                disabled={!listStore.targetValue}
                onPress={onSearchPress}
                title={SEARCH}
                style={styles.appButton}
              />
            </View>
          </>
        )}
      </AppContainer>
    </AppKeyboardAvoidingView>
  );
};

export default observer(Home);

export const styles = StyleSheet.create({
  input: {
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    height: 40,
    width: '80%',
    borderRadius: 10,
    backgroundColor: GRAY,
  },
  spinner: {justifyContent: 'center', flex: 1},
  appButton: {
    justifyContent: 'center',
    backgroundColor: GRAY,
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
  },
  controllerContainer: {flexDirection: 'row'},
});
