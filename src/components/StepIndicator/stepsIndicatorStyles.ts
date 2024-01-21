import {StyleSheet} from 'react-native-size-scaling';
import {colors} from '../../utils/colors';
import {
  ACTIVE_WELCOME_STEP_SIZE,
  INACTIVE_WELCOME_STEP_SIZE,
  WELCOME_STEPS_HORIZONTAL_MARGIN,
} from '../../utils/constants';

export const stepsIndicatorStyles = StyleSheet.create({
  stepsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inactiveStep: {
    height: INACTIVE_WELCOME_STEP_SIZE,
    width: INACTIVE_WELCOME_STEP_SIZE,
    borderRadius: 50,
    marginHorizontal: WELCOME_STEPS_HORIZONTAL_MARGIN,
    borderWidth: 3,
    borderColor: colors.GREY_LIGHT,
  },
  activeStep: {
    height: ACTIVE_WELCOME_STEP_SIZE,
    width: ACTIVE_WELCOME_STEP_SIZE,
    borderRadius: 50,
    marginHorizontal: WELCOME_STEPS_HORIZONTAL_MARGIN,
    backgroundColor: colors.WHITE,
  },
});
