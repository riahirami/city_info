import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';

import {NavigationContainer} from '@react-navigation/native';

import {SPLASH_SCREEN_DISPLAY_TIME} from '../utils/constants';

import {navigationRef} from './RootNavigation';
import OnBoardingStackNavigation from './OnBoardingStackNavigation/OnBoardingStackNavigation';
import WelcomeStackNavigationStackNavigation from './WelcomeStackNavigationStackNavigation/WelcomeStackNavigationStackNavigation';
import {useAppSelector} from '../store/features/hooks';
import {SelectGlobal} from '../store/features/global/globalSlice';

function Navigation(): JSX.Element {
  const hideSplashScreen = async (): Promise<void> => {
    setTimeout(async () => {
      await RNBootSplash.hide();
    }, SPLASH_SCREEN_DISPLAY_TIME);
  };
  useEffect(() => {
    void hideSplashScreen();
  }, []);
  const {isFirstConnexion} = useAppSelector(SelectGlobal);

  return (
    <NavigationContainer ref={navigationRef}>
      {isFirstConnexion ? (
        <WelcomeStackNavigationStackNavigation />
      ) : (
        <OnBoardingStackNavigation />
      )}
    </NavigationContainer>
  );
}

export default Navigation;
