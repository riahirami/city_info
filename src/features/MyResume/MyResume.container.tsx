import React, {useRef} from 'react';

import {type NativeStackScreenProps} from '@react-navigation/native-stack';

import {type MY_RESUME_SCREEN} from '../../utils/screenNames';

import MyResume from './MyResume';
import {OnBoardingStackParamList} from '../../navigation/OnBoardingStackNavigation/OnBoardingStackNavigation';

/**
 * Container used to separate MyResume logic as a wrapper to MyResume screen
 * @returns JSX.Element
 */
interface MyResumeContainerProps
  extends NativeStackScreenProps<
    OnBoardingStackParamList,
    typeof MY_RESUME_SCREEN
  > {}

const MyResumeContainer: React.FC<MyResumeContainerProps> = ({
  navigation,
}): JSX.Element => {
  const webviewRef = useRef(null);
  const onBackPress = () => {
    navigation.goBack();
  };
  return <MyResume onBackPress={onBackPress} webviewRef={webviewRef} />;
};

export default MyResumeContainer;
