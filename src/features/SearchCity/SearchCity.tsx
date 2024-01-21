import React, {useCallback} from 'react';
import {FlatList, TextInput, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ScreenHeader from '../../components/ScreenHeader/ScreenHeader';

import styles from './searchCityStyles.phone';
import {City} from '../../models/City';
import CustomLoader from '../../components/CustomLoader/CustomLoader';
import {icons} from '../../utils/icons';
import CustomButton from '../../components/CustomButton/CustomButton';
import {colors} from '../../utils/colors';
import CityCard from '../../components/CityCard/CityCard';
import ConnectionError from '../../components/Connection_Error/ConnectionError';
import {isNetworkErrorString} from '../../utils/network';
import EmptyResult from '../../components/EmptyResult/EmptyResult';
/**
 * Represents SearchCity screen ui
 * @returns JSX.Element
 */
interface SearchCityProps {
  placeholder?: string;
  cityDetails: City[];
  searchText: string;
  setSearchText: (text: string) => void;
  getSearchedCity: () => Promise<void>;
  isLoadingSearch: boolean;
  failedError?: string;
}

const SearchCity: React.FC<SearchCityProps> = ({
  getSearchedCity,
  cityDetails,
  searchText,
  setSearchText,
  isLoadingSearch,
  failedError,
}): JSX.Element => {
  const isEmptyInput = !!(searchText.length === 0);

  const renderCityCard = useCallback(
    ({item}: {item: City}) => <CityCard city={item} />,
    [],
  );
  const renderEmptyList = useCallback(
    () => searchText.length > 0 && cityDetails.length === 0 && <EmptyResult />,
    [cityDetails.length, searchText.length],
  );
  const renderFailedError = useCallback(
    (errorText: string) =>
      failedError &&
      failedError?.length > 0 &&
      (isNetworkErrorString(failedError) ? (
        <ConnectionError />
      ) : (
        <ConnectionError errorText={errorText} />
      )),
    [failedError],
  );
  return (
    <SafeAreaView style={styles.safeAreaStyle}>
      <ScreenHeader title={'Search City'} hasBackButton={false} />
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <View style={styles.inputContainerStyle}>
            <View style={styles.inputAndLoaderContainer}>
              <TextInput
                style={styles.inputInnerStyle}
                placeholder="Enter city name"
                value={searchText}
                onChange={e => {
                  setSearchText(e.nativeEvent.text);
                }}
              />
              {isLoadingSearch && (
                <View>
                  <CustomLoader size="small" />
                </View>
              )}
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton
              title="Search"
              onPress={() => {
                getSearchedCity();
              }}
              disabled={isEmptyInput}
              icon={icons.SEARCH}
            />
            <CustomButton
              title="Reset"
              onPress={() => {
                setSearchText('');
              }}
              disabled={isEmptyInput}
              icon={icons.RESET}
              iconColor={colors.PRIMARY}
              titleColor={colors.PRIMARY}
              borderColor={colors.PRIMARY}
            />
          </View>
        </View>
      </View>
      <View style={styles.cityDetailsContainer}>
        {failedError ? (
          renderFailedError(failedError)
        ) : !isLoadingSearch ? (
          <>
            <FlatList
              data={cityDetails}
              renderItem={renderCityCard}
              keyExtractor={(item: City) => item.latitude + '' + item.longitude}
              ListEmptyComponent={renderEmptyList}
              contentContainerStyle={styles.flatListcontentStyle}
            />
          </>
        ) : (
          <>{<CustomLoader />}</>
        )}
      </View>
    </SafeAreaView>
  );
};

export default SearchCity;
