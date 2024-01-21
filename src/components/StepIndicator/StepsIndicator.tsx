import React from 'react';
import {View} from 'react-native';
import {stepsIndicatorStyles} from './stepsIndicatorStyles';

interface StepsIndicatorProps {
  stepsNumber: number;
  activeStepIndex: number;
  inactiveColor?: string;
}

const StepsIndicator = ({
  stepsNumber,
  activeStepIndex,
  inactiveColor,
}: StepsIndicatorProps): JSX.Element => {
  const steps = Array.apply(null, Array(stepsNumber));

  return (
    <View style={stepsIndicatorStyles.stepsContainer}>
      {steps.map((_, index) => {
        return (
          <View
            key={`welcomeIndicator${index}`}
            style={
              index === activeStepIndex
                ? stepsIndicatorStyles.activeStep
                : [
                    stepsIndicatorStyles.inactiveStep,
                    {backgroundColor: inactiveColor},
                  ]
            }
          />
        );
      })}
    </View>
  );
};

export default StepsIndicator;
