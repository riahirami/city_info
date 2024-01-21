import {StyleSheet, isTablet, scale} from 'react-native-size-scaling';
export default StyleSheet.create({
  itemContainer: {
    padding: 24,
    gap: 8,
  },
  cityDetailsText: {
    fontSize: isTablet ? scale(16) : 16,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  itemText: {
    fontSize: isTablet ? scale(16) : 16,
    lineHeight: 24,
  },
});
