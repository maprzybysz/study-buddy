import React from 'react';
import { SearchBarWrapper, StatusInfo } from './SearchBar.styles';
import { Input } from 'components/atoms/Input/Input';

const SearchBar = () => (
  <SearchBarWrapper>
    <StatusInfo>
      <p>Logged as ....</p>
    </StatusInfo>
    <Input />
  </SearchBarWrapper>
);

export default SearchBar;
