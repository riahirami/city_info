import {StyleSheet, isTablet, scale} from 'react-native-size-scaling';
import {colors} from '../../utils/colors';
export default StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center'},

  screenHeaderTitle: {
    fontSize: isTablet ? scale(24) : 24,
    fontWeight: 'bold',
    color: colors.BLACK,
    marginLeft: 24,
    paddingVertical: 16,
  },
  arrowLeftIcon: {
    width: isTablet ? scale(24) : 24,
    height: isTablet ? scale(24) : 24,
    tintColor: colors.BLACK,
    marginLeft: 8,
  },
});
