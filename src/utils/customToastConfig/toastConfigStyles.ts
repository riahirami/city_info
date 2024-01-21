import {StyleSheet} from 'react-native-size-scaling';
import {colors} from '../colors';

export const styles = StyleSheet.create({
  text1: {
    fontSize: 16,
    textAlign: 'left',
  },
  textsContainer: {
    flex: 1,
  },
  text2: {
    fontSize: 14,
    textAlign: 'left',
  },
  toast: {
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginHorizontal: 8,
  },
  successText1: {
    color: colors.SUCCESS,
  },
  success: {
    backgroundColor: colors.SUCCESS,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  errorText1: {
    color: colors.STATUS_ERROR,
  },
  error: {
    backgroundColor: colors.STATUS_ERROR,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
});
