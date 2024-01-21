import {type PayloadAction, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';

export interface PopupConfig {
  isVisible: boolean;
  title: string;
  message?: string;
  confirmText?: string;
  isGlobal?: boolean;
  confirmCallback?: () => void;
  cancelText?: string;
}

interface PopupConfigState {
  popupConfig: PopupConfig;
}
const initialState: PopupConfigState = {
  popupConfig: {title: '', isVisible: false, isGlobal: true},
};

export const popupSlice = createSlice({
  name: 'popUp',
  initialState,
  reducers: {
    setPopupConfig: (
      state: PopupConfigState,
      action: PayloadAction<PopupConfig>,
    ) => {
      state.popupConfig = action.payload;
    },
    closePopup: (state: PopupConfigState) => {
      state.popupConfig.isVisible = false;
      state.popupConfig.isGlobal = true;
      state.popupConfig.confirmCallback = undefined;
      state.popupConfig.cancelText = undefined;
    },
  },
});

export const {setPopupConfig, closePopup} = popupSlice.actions;

export const selectPopupConfig = (state: RootState): PopupConfig =>
  state.popup.popupConfig;

export default popupSlice;
