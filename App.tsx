import * as React from 'react';
import HomeTabNavigator from './src/navigaiton';
import {useEffect} from 'react';
import {useStore} from './src/hooks/useStore';

const App = () => {
  const listStore = useStore('listStore');
  const configStore = useStore('configStore');

  useEffect(() => {
    listStore.loadList();
    configStore.getUserName();
  }, [configStore, listStore]);
  return <HomeTabNavigator />;
};

export default App;
