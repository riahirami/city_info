import { StyleSheet } from 'react-native-size-scaling';
import { colors } from '../../utils/colors';
;

export default StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center'},
  screenHeaderTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.BLACK,
    marginLeft: 24,
  },
  arrowLeftIcon: {
    width: 24,
    height: 24,
    tintColor: colors.BLACK,
    marginLeft: 8,
  },
  loaderContainer: {
    height: '100%',
  },
});
