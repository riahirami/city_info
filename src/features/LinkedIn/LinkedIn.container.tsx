import React, {useRef} from 'react';

import {type NativeStackScreenProps} from '@react-navigation/native-stack';

import LinkedIn from './LinkedIn';
import {LINKEDIN_SCREEN} from '../../utils/screenNames';
import {OnBoardingStackParamList} from '../../navigation/OnBoardingStackNavigation/OnBoardingStackNavigation';

/**
 * Container used to separate LinkedIn logic as a wrapper to LinkedIn screen
 * @returns JSX.Element
 */
interface LinkedInContainerProps
  extends NativeStackScreenProps<
    OnBoardingStackParamList,
    typeof LINKEDIN_SCREEN
  > {}

const LinkedInContainer: React.FC<LinkedInContainerProps> = ({
  navigation,
}): JSX.Element => {
  const onBackPress = () => {
    navigation.goBack();
  };
  const webviewRef = useRef(null);

  return <LinkedIn onBackPress={onBackPress} webviewRef={webviewRef} />;
};

export default LinkedInContainer;
