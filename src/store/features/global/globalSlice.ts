import {createSlice, type PayloadAction} from '@reduxjs/toolkit';

import {type RootState} from '../store';

export interface GlobalState {
  isFirstConnexion: boolean;
}

const initialState: GlobalState = {
  isFirstConnexion: true,
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setIsFirstConnexion: (
      state: GlobalState,
      action: PayloadAction<GlobalState>,
    ) => {
      state.isFirstConnexion = action.payload.isFirstConnexion;
    },
  },
});

export const {setIsFirstConnexion} = globalSlice.actions;

export const SelectGlobal = (state: RootState): GlobalState => state.global;

export default globalSlice;
