import {StyleSheet, isTablet, scale} from 'react-native-size-scaling';
import {colors} from '../../utils/colors';

export const welcomeStyles = StyleSheet.create({
  stepsIndicatorContainer: {
    marginBottom: 50,
  },
  footerContainer: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    marginTop: 68,
    alignItems: 'center',
  },
  titleText: {
    fontSize: isTablet ? scale(44) : 44,
    fontWeight: 'bold',
    color: colors.BLACK,
    textAlign: 'center',
  },
});
