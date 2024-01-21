import {StyleSheet, isTablet, scale} from 'react-native-size-scaling';
import {colors} from '../../utils/colors';
export default StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: colors.WHITE,
    fontSize: isTablet ? scale(42) : 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: colors.BLACK,
  },
});
