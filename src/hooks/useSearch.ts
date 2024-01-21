import {useState} from 'react';

import useDebounceText from '../hooks/useDebounceText';

import {DEBOUNCE_DELAY} from '../utils/constants';

export interface UseSearchReturnType {
  setSearchText: (text: string) => void;
  searchText: string;
  debouncedSearchText: string;
}

export const useSearch = (defaultValue?: string): UseSearchReturnType => {
  const [searchText, setSearchText] = useState(defaultValue ?? '');
  const debouncedSearchText = useDebounceText(searchText, DEBOUNCE_DELAY);
  return {setSearchText, searchText, debouncedSearchText};
};
