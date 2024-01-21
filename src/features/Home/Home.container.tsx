import React from 'react';

import {type NativeStackScreenProps} from '@react-navigation/native-stack';

import {type HOME_SCREEN} from '../../utils/screenNames';

import Home from './Home';
import {BottomTabNavigationStackParamList} from '../../navigation/BottomTabNavigationStackNavigation';

/**
 * Container used to separate Home logic as a wrapper to Home screen
 * @returns JSX.Element
 */
interface HomeContainerProps
  extends NativeStackScreenProps<
    BottomTabNavigationStackParamList,
    typeof HOME_SCREEN
  > {}

const HomeContainer: React.FC<HomeContainerProps> = ({}): JSX.Element => {
  return <Home />;
};

export default HomeContainer;
