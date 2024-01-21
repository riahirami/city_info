import React from 'react';
import {
  View,
  FlatList,
  StatusBar,
  useWindowDimensions,
  Text,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {
  type WelcomeStep as WelcomeStepType,
  type WelcomeStepsArray,
} from '../../utils/types';

import {WELCOME_STEPS} from '../../utils/constants';

import {welcomeStyles} from './welcomeStyles';
import {isAndroidDevice} from '../../utils/helpers';
import {icons} from '../../utils/icons';
import StepsIndicator from '../../components/StepIndicator/StepsIndicator';
import WelcomeStep from '../../components/WelcomeStep/WelcomeStep';
import CustomButton from '../../components/CustomButton/CustomButton';
import {colors} from '../../utils/colors';

interface WelcomeProps {
  steps: WelcomeStepsArray;
  onPressStart: () => void;
  setCurrentIndex: (value: React.SetStateAction<number>) => void;
  currentIndex: number;
}

const Welcome: React.FC<WelcomeProps> = ({
  steps,
  onPressStart,
  setCurrentIndex,
  currentIndex,
}) => {
  const {width} = useWindowDimensions();
  const insets = useSafeAreaInsets();

  const renderItem = ({
    item,
  }: {
    item: WelcomeStepType;
    index: number;
  }): JSX.Element => {
    return <WelcomeStep step={item} />;
  };

  return (
    <View>
      {isAndroidDevice() && (
        <StatusBar backgroundColor={'transparent'} translucent />
      )}
      <FlatList
        onScroll={ev => {
          setCurrentIndex(Math.round(ev.nativeEvent.contentOffset.x / width));
        }}
        keyExtractor={(_, index) => `step-${index}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        data={steps}
        renderItem={renderItem}
      />
      <View style={welcomeStyles.logoContainer}>
        <Text style={welcomeStyles.titleText}>City info</Text>
      </View>
      <View
        style={[
          welcomeStyles.footerContainer,
          {marginBottom: insets.bottom + 37},
        ]}>
        <View style={welcomeStyles.stepsIndicatorContainer}>
          <StepsIndicator
            stepsNumber={WELCOME_STEPS.length}
            activeStepIndex={currentIndex}
          />
        </View>
        <CustomButton
          title={'Get started'}
          onPress={onPressStart}
          borderColor={colors.WHITE}
          titleColor={colors.WHITE}
          icon={icons.ARROW_RIGHT}
          iconColor={colors.WHITE}
        />
      </View>
    </View>
  );
};

export default Welcome;
