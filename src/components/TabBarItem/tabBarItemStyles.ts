import {StyleSheet, isTablet} from 'react-native-size-scaling';
import {colors} from '../../utils/colors';
const TAB_ICON_SIZE = isTablet ? 32 : 24;

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    width: '100%',
    marginTop: 5,
    fontSize: isTablet ? 16 : 12,
    color: colors.BLACK,
    fontWeight: 'bold',
  },
  icon: {
    width: TAB_ICON_SIZE,
    height: TAB_ICON_SIZE,
    resizeMode: 'contain',
  },
});
