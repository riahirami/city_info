import {StyleSheet, isTablet, scale} from 'react-native-size-scaling';
import {colors} from '../../utils/colors';
export default StyleSheet.create({
  itemContainer: {
    padding: 24,
    gap: 8,
    borderWidth: 1,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginHorizontal: 32,
  },
  titleStyle: {gap: 32},
  subtitleStyle: {color: colors.PRIMARY},
  cityDetailsText: {
    fontSize: isTablet ? scale(16) : 16,
    lineHeight: 24,
    fontWeight: 'bold',
    color: colors.BLACK,
  },
  detailsStyle: {
    gap: 8,
    marginLeft: 8,
  },
  itemText: {
    fontSize: isTablet ? scale(16) : 16,
    lineHeight: 24,
    color: colors.BLACK,
  },
  imageStyle: {
    width: isTablet ? scale(180) : 180,
    height: isTablet ? scale(180) : 180,
    borderRadius: 16,
  },
});
