import React from 'react';

import {
  ABOUT_ME_SCREEN,
  HOME_SCREEN,
  SEARCH_CITY_SCREEN,
} from '../utils/screenNames';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import SearchCityContainer from '../features/SearchCity/SearchCity.container';
import AboutMeContainer from '../features/AboutMe/AboutMe.container';
import TabBarItem, {TabBarItemProps} from '../components/TabBarItem/TabBarItem';
import {icons} from '../utils/icons';
import HomeContainer from '../features/Home/Home.container';
import {colors} from '../utils/colors';
import {StyleSheet, isTablet, scale} from 'react-native-size-scaling';

// Define Stack param list for each screen
export type BottomTabNavigationStackParamList = {
  [HOME_SCREEN]: undefined;
  [SEARCH_CITY_SCREEN]: undefined;
  [ABOUT_ME_SCREEN]: undefined;
};

const BottomTab = createBottomTabNavigator<BottomTabNavigationStackParamList>();

const getBottomTabOptions = (
  params: Omit<TabBarItemProps, 'isFocused'>,
): Partial<BottomTabNavigationOptions> => ({
  tabBarIcon: ({focused}: {focused: boolean}) => {
    return (
      <TabBarItem isFocused={focused} icon={params.icon} title={params.title} />
    );
  },
});
/**
 * Returns the stack navigation and all the associated screens
 * @returns JSX.Element
 */
const BottomTabNavigationStackNavigation = (): JSX.Element => {
  return (
    <BottomTab.Navigator
      initialRouteName={HOME_SCREEN}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
      }}>
      <BottomTab.Screen
        options={getBottomTabOptions({
          title: 'Home',
          icon: icons.HOME_TAB,
        })}
        name={HOME_SCREEN}
        component={HomeContainer}
      />
      <BottomTab.Screen
        options={getBottomTabOptions({
          title: 'Search',
          icon: icons.SEARCH,
        })}
        name={SEARCH_CITY_SCREEN}
        component={SearchCityContainer}
      />
      <BottomTab.Screen
        options={getBottomTabOptions({
          title: 'About me',
          icon: icons.PROFIL_TAB,
        })}
        name={ABOUT_ME_SCREEN}
        component={AboutMeContainer}
      />
    </BottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    marginBottom: 30,
    position: 'absolute',
    marginHorizontal: 42,
    height: isTablet ? scale(60) : 60,
    borderRadius: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 8,
    borderWidth: 1,
    borderColor: colors.DARK_GRAY,
    elevation: 10,
  },
});
export default BottomTabNavigationStackNavigation;
