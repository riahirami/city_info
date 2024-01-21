import React from 'react';
import {ImageBackground, View} from 'react-native';

import {type WelcomeStep as WelcomeStepType} from '../../utils/types';
import {welcomeStepStyles} from './welcomeStepStyles';

interface WelcomeStepProps {
  step: WelcomeStepType;
}

const WelcomeStep: React.FC<WelcomeStepProps> = ({step}) => {
  const {image} = step;
  return (
    <View style={welcomeStepStyles.container}>
      <ImageBackground style={welcomeStepStyles.image} source={image} />
    </View>
  );
};

export default WelcomeStep;
