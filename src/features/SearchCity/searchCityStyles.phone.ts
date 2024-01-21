import {StyleSheet, isTablet, scale} from 'react-native-size-scaling';
import {colors} from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
  },
  safeAreaStyle: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  itemContainer: {
    padding: 24,
    gap: 8,
  },
  formContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  inputContainerStyle: {
    borderWidth: 0.4,
    padding: 16,
    borderRadius: 12,
    width: '90%',
    color: colors.TEXT_PLACEHOLDER,
  },
  inputInnerStyle: {
    flex: 1,
    height: isTablet ? scale(30) : 30,
    fontSize: 18,
  },
  inputAndLoaderContainer: {flexDirection: 'row'},
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    gap: 16,
  },
  itemText: {
    fontSize: isTablet ? scale(16) : 16,
    lineHeight: 24,
  },
  cityDetailsContainer: {
    marginTop: 10,
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: colors.GRAY,
    marginHorizontal: 8,
  },
  cityDetailsText: {
    fontSize: isTablet ? scale(16) : 16,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  flatListcontentStyle: {
    flex: 0.8,
    justifyContent: 'center',
    backgroundColor: colors.WHITE,
  },
  searchButtonContainer: {
    padding: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.BLACK,
    color: colors.BLACK,
    flexDirection: 'row',
    alignItems: 'center',
  },
  resetButtonContainer: {
    padding: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.PRIMARY,
    color: colors.PRIMARY,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    width: isTablet ? scale(20) : 20,
    height: isTablet ? scale(20) : 20,
    marginRight: 8,
  },
  resetIcon: {
    tintColor: colors.PRIMARY,
  },
  resetText: {
    color: colors.PRIMARY,
  },
});

export default styles;
