import {StyleSheet, isTablet, scale} from 'react-native-size-scaling';
export default StyleSheet.create({
  buttonContainer: {
    padding: 12,
    borderRadius: 16,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconStyle: {
    width: isTablet ? scale(20) : 20,
    height: isTablet ? scale(20) : 20,
    marginRight: 8,
  },
  titleStyle: {
    fontSize: isTablet ? scale(14) : 14,
    lineHeight: 24,
  },
});
