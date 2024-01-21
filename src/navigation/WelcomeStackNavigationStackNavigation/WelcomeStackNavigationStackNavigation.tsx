import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeContainer from '../../features/Welcome/Welcome.container';
import { DEFAULT_ORIENTATION } from '../../utils/constants';
import { WELCOME_SCREEN } from '../../utils/screenNames';

// Define Stack param list for each screen
export type WelcomeStackNavigationStackParamList = {
  [WELCOME_SCREEN]: undefined;
};

const WelcomeStackNavigationStack =
  createNativeStackNavigator<WelcomeStackNavigationStackParamList>();

/**
 * Returns the stack navigation and all the associated screens
 * @returns JSX.Element
 */
const WelcomeStackNavigationStackNavigation = (): JSX.Element => {
  return (
    <WelcomeStackNavigationStack.Navigator
      screenOptions={{headerShown: false, orientation: DEFAULT_ORIENTATION}}>
      <WelcomeStackNavigationStack.Screen
        name={WELCOME_SCREEN}
        component={WelcomeContainer}
      />
    </WelcomeStackNavigationStack.Navigator>
  );
};

export default WelcomeStackNavigationStackNavigation;
