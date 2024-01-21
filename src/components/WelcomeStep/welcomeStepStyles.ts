import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../utils/constants';
export const welcomeStepStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    lineHeight: 34,
    color: colors.WHITE,
    textAlign: 'center',
  },
  subtitle: {
    marginTop: 16,
    fontSize: 14,
    lineHeight: 21,
    color: colors.WHITE,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  image: {
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    alignItems: 'center',
  },
  textContentContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 24,
  },
});
