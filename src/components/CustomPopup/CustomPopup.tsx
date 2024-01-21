import React from 'react';
import {Button, Modal, Text, View} from 'react-native';
import {PopupConfig, closePopup} from '../../store/features/popup/popupSlice';
import {useAppDispatch} from '../../store/features/hooks';
import {customPopupStyles} from './customPopupStyles';

interface PopupProps {
  popupConfig: PopupConfig;
}

const CustomPopup = ({popupConfig}: PopupProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const onConfirmButtonPress = (): void => {
    dispatch(closePopup());
    popupConfig.confirmCallback?.();
  };
  const onCancelButtonPress = (): void => {
    dispatch(closePopup());
  };
  return (
    <Modal transparent visible={popupConfig.isVisible}>
      <View style={customPopupStyles.container}>
        <View style={customPopupStyles.modalContainer}>
          <Text style={customPopupStyles.titleText}>{popupConfig.title}</Text>
          {popupConfig.message && (
            <Text style={customPopupStyles.contentText}>
              {popupConfig.message}
            </Text>
          )}
          <View style={customPopupStyles.buttonsContainer}>
            <Button
              title={popupConfig.confirmText ?? ''}
              onPress={onConfirmButtonPress}
            />
            {popupConfig.cancelText && (
              <Button
                title={popupConfig.cancelText ?? ''}
                onPress={onCancelButtonPress}
              />
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomPopup;
