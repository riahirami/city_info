import {setPopupConfig} from '../store/features/popup/popupSlice';
import type {AnyAction, ThunkDispatch} from '@reduxjs/toolkit';
import {PopupParams} from './types';
import {RootState} from '../store/features/store';
import {Platform} from 'react-native';

export const showPopup = (
  dispatch: ThunkDispatch<RootState, undefined, AnyAction>,
  params: PopupParams,
): void => {
  dispatch(
    setPopupConfig({
      isVisible: true,
      title: params.title ?? '',
      message: params.message,
      confirmText: params.confirmText ?? 'popup.confirm_text',
      isGlobal: params.isGlobal ?? true,
      confirmCallback: params.confirmCallback,
      cancelText: params.cancelText,
    }),
  );
};

export const isAndroidDevice = (): boolean => {
  return Platform.OS === 'android';
};
