import React from 'react';

import {type NativeStackScreenProps} from '@react-navigation/native-stack';

import {type ABOUT_ME_SCREEN} from '../../utils/screenNames';

import AboutMe from './AboutMe';
import {BottomTabNavigationStackParamList} from '../../navigation/BottomTabNavigationStackNavigation';
import {navigate} from '../../navigation/RootNavigation';

/**
 * Container used to separate AboutMe logic as a wrapper to AboutMe screen
 * @returns JSX.Element
 */
interface AboutMeContainerProps
  extends NativeStackScreenProps<
    BottomTabNavigationStackParamList,
    typeof ABOUT_ME_SCREEN
  > {}

const AboutMeContainer: React.FC<AboutMeContainerProps> = ({}): JSX.Element => {
  const navigateToWebViewScreen = (webView: string) => {
    navigate(webView);
  };
  return <AboutMe navigateToWebViewScreen={navigateToWebViewScreen} />;
};

export default AboutMeContainer;
