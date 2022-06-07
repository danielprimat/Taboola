import {useColorScheme} from 'react-native';
import * as React from 'react';

import {useStore} from '../../hooks/useStore';

import AppContainer from '../../components/container';
import FullList from '../../components/FullList';

const SearchResults = () => {
  const listStore = useStore('listStore');
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <AppContainer isDarkMode={isDarkMode}>
      <FullList sections={listStore.filteredList} />
    </AppContainer>
  );
};

export default SearchResults;
