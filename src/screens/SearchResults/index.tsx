import * as React from 'react';
import {useStore} from '../../hooks/useStore';
import FullList from '../../components/FullList';
import AppContainer from '../../components/AppContainer';

const SearchResults = () => {
  const listStore = useStore('listStore');
  const {isDarkMode} = useStore('configStore');

  return (
    <AppContainer isDarkMode={isDarkMode}>
      <FullList sections={listStore.filteredList} />
    </AppContainer>
  );
};

export default SearchResults;
