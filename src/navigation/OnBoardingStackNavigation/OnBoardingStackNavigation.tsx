import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GithubContainer from '../../features/Github/Github.container';
import LinkedInContainer from '../../features/LinkedIn/LinkedIn.container';
import MyResumeContainer from '../../features/MyResume/MyResume.container';
import { DEFAULT_ORIENTATION } from '../../utils/constants';
import {
  BOTTOM_TAB_STACK,
  GITHUB_SCREEN,
  HOME_SCREEN,
  LINKEDIN_SCREEN,
  MY_RESUME_SCREEN,
  WELCOME_SCREEN,
} from '../../utils/screenNames';
import BottomTabNavigationStackNavigation from '../BottomTabNavigationStackNavigation';

export type OnBoardingStackParamList = {
  [HOME_SCREEN]: undefined;
  [WELCOME_SCREEN]: undefined;
  [BOTTOM_TAB_STACK]: undefined;
  [GITHUB_SCREEN]: undefined;
  [LINKEDIN_SCREEN]: undefined;
  [MY_RESUME_SCREEN]: undefined;
};

const OnBoardingStack = createNativeStackNavigator<OnBoardingStackParamList>();

const OnBoardingStackNavigation = (): JSX.Element => (
  <OnBoardingStack.Navigator
    screenOptions={{headerShown: false, orientation: DEFAULT_ORIENTATION}}>
    <OnBoardingStack.Screen
      name={BOTTOM_TAB_STACK}
      component={BottomTabNavigationStackNavigation}
    />
    <OnBoardingStack.Screen name={GITHUB_SCREEN} component={GithubContainer} />
    <OnBoardingStack.Screen
      name={LINKEDIN_SCREEN}
      component={LinkedInContainer}
    />
    <OnBoardingStack.Screen
      name={MY_RESUME_SCREEN}
      component={MyResumeContainer}
    />
  </OnBoardingStack.Navigator>
);

export default OnBoardingStackNavigation;
