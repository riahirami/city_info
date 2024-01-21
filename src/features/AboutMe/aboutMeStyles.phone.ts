import {StyleSheet, isTablet, scale} from 'react-native-size-scaling';
import {colors} from '../../utils/colors';
export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.WHITE,
    justifyContent: 'center',
  },
  headerView: {
    gap: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: isTablet ? scale(180) : 180,
    height: isTablet ? scale(180) : 180,
    borderRadius: 40,
    marginBottom: 16,
  },
  nameText: {
    fontSize: isTablet ? scale(26) : 26,
    fontWeight: 'bold',
    color: colors.PRIMARY,
  },
  descriptionText: {
    fontSize: isTablet ? scale(18) : 18,
    fontWeight: 'bold',
    color: colors.BLACK,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 32,
    marginTop: 32,
    marginHorizontal: 16,
  },
});
