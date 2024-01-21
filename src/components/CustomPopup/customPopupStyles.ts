import {StyleSheet} from 'react-native-size-scaling';
import {colors} from '../../utils/colors';
export const customPopupStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.TRANSPARENT,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  modalContainer: {
    alignItems: 'center',
    backgroundColor: colors.WHITE,
    width: '100%',
    minHeight: 100,
    borderRadius: 10,
    padding: 39,
    zIndex: 9999,
  },
  titleText: {
    fontSize: 20,
    color: colors.BLACK,
    marginBottom: 32,
    textAlign: 'center',
  },
  contentText: {
    fontSize: 14,
    color: colors.BLACK,
    marginBottom: 42,
    textAlign: 'center',
  },
  buttonsContainer: {
    gap: 8,
    alignItems: 'center',
  },
});
