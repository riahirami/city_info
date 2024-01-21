import {useEffect} from 'react';

import {MIN_STRING_LENGTH_TO_START_SEARCH} from '../utils/constants';

import {useFetch} from './useFetch';
import {useSearch} from './useSearch';

import {useLazyGetConversationQuery} from '../store/api/SearchCityApi';
import {City} from '../models/City';
import {handleErrorPopUp} from '../utils/network';

interface useSearchPlaceReturnType {
  cityDetails: City[];
  searchText: string;
  setSearchText: (text: string) => void;
  cityFailedError?: string;
  getSearchedCity: () => Promise<void>;
  isLoading: boolean;
  failedError?: string;
}

function useSearchCity(): useSearchPlaceReturnType {
  const [searchCityApi] = useLazyGetConversationQuery();

  const {searchText, setSearchText, debouncedSearchText} = useSearch();

  const {
    data,
    apiCall: getSearchedCity,
    setData,
    failedError,
    isLoading,
  } = useFetch<City[]>(async () => {
    return await searchCityApi({name: debouncedSearchText.trim()}).unwrap();
  });

  useEffect(() => {
    if (
      debouncedSearchText.trim().length >= MIN_STRING_LENGTH_TO_START_SEARCH
    ) {
      void getSearchedCity();
    } else if (debouncedSearchText.trim().length === 0) {
      setData([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchText]);

  return {
    cityDetails: data ?? [],
    searchText,
    setSearchText,
    cityFailedError: failedError,
    getSearchedCity,
    isLoading,
  };
}

export default useSearchCity;
