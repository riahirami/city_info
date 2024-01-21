import {StyleSheet, isTablet, scale} from 'react-native-size-scaling';
import {colors} from '../../utils/colors';

export default StyleSheet.create({
  emptyListContainer: {
    marginHorizontal: 24,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  emptyListText: {
    fontSize: isTablet ? scale(22) : 22,
    lineHeight: 24,
    color: colors.PRIMARY,
    textAlign: 'center',
    paddingTop: 20,
  },
  iconStyle: {
    width: isTablet ? scale(177) : 177,
    height: isTablet ? scale(142) : 142,
  },
});
