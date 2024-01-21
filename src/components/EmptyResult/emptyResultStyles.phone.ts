import {StyleSheet, isTablet, scale} from 'react-native-size-scaling';
import {colors} from '../../utils/colors';
export default StyleSheet.create({
  emptyListContainer: {
    flex: 1,
    marginHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyListText: {
    fontSize: isTablet ? scale(16) : 16,
    lineHeight: 24,
    color: colors.PRIMARY,
    textAlign: 'center',
  },
  emptyListImage: {
    width: isTablet ? scale(180) : 180,
    height: isTablet ? scale(180) : 180,
    resizeMode: 'contain',
  },
});
