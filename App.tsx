import * as React from 'react';
import HomeTabNavigator from './src/navigaiton';
import {useEffect} from 'react';
import {useStore} from './src/hooks/useStore';
import {useColorScheme} from 'react-native';

const App = () => {
  const listStore = useStore('listStore');
  const configStore = useStore('configStore');
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    listStore.loadList();
  }, [isDarkMode]);
  useEffect(() => {
    configStore.getUserName();
  }, []);

  return <HomeTabNavigator />;
};

export default App;
