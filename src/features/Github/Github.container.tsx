import React, {useRef} from 'react';

import {type NativeStackScreenProps} from '@react-navigation/native-stack';

import Github from './Github';
import {GITHUB_SCREEN} from '../../utils/screenNames';
import {OnBoardingStackParamList} from '../../navigation/OnBoardingStackNavigation/OnBoardingStackNavigation';

/**
 * Container used to separate Github logic as a wrapper to Github screen
 * @returns JSX.Element
 */
interface GithubContainerProps
  extends NativeStackScreenProps<
    OnBoardingStackParamList,
    typeof GITHUB_SCREEN
  > {}

const GithubContainer: React.FC<GithubContainerProps> = ({
  navigation,
}): JSX.Element => {
  const onBackPress = () => {
    navigation.goBack();
  };
  const webviewRef = useRef(null);

  return <Github onBackPress={onBackPress} webviewRef={webviewRef} />;
};

export default GithubContainer;
