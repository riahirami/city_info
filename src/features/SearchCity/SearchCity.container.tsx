import React from 'react';

import {type NativeStackScreenProps} from '@react-navigation/native-stack';

import {type SEARCH_CITY_SCREEN} from '../../utils/screenNames';

import SearchCity from './SearchCity';
import {BottomTabNavigationStackParamList} from '../../navigation/BottomTabNavigationStackNavigation';
import useSearchCity from '../../hooks/useSearchCity';
import {handleErrorPopUp} from '../../utils/network';

/**
 * Container used to separate SearchCity logic as a wrapper to SearchCity screen
 * @returns JSX.Element
 */
interface SearchCityContainerProps
  extends NativeStackScreenProps<
    BottomTabNavigationStackParamList,
    typeof SEARCH_CITY_SCREEN
  > {}

const SearchCityContainer: React.FC<
  SearchCityContainerProps
> = ({}): JSX.Element => {
  const {
    cityDetails,
    setSearchText,
    searchText,
    getSearchedCity,
    isLoading,
    cityFailedError,
  } = useSearchCity();

  const searchCityAction = async (): Promise<void> => {
    if (searchText.length > 0) {
      try {
        await getSearchedCity();
      } catch (error) {
        console.log('error', error);
        handleErrorPopUp(error);
      }
    }
  };
  return (
    <SearchCity
      cityDetails={cityDetails}
      setSearchText={setSearchText}
      searchText={searchText}
      getSearchedCity={searchCityAction}
      isLoadingSearch={isLoading}
      failedError={cityFailedError}
    />
  );
};

export default SearchCityContainer;
