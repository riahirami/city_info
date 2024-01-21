import {PersistConfig, persistReducer, persistStore} from 'redux-persist';

import {AnyAction, configureStore} from '@reduxjs/toolkit';

import loaderSlice from '../features/loader/loaderSlice';

import {searchCityApi} from '../api/SearchCityApi';
import popupSlice from '../features/popup/popupSlice';
import globalSlice, {GlobalState} from './global/globalSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const globalPersistConfig: PersistConfig<GlobalState> = {
  key: 'global',
  storage: AsyncStorage,
  whitelist: ['isFirstConnexion'],
};

const persistedGlobalReducer = persistReducer<GlobalState, AnyAction>(
  globalPersistConfig,
  globalSlice.reducer,
);

/**
 * Creates a store to use in App.tsx redux provider
 */
export const store = configureStore({
  reducer: {
    loader: loaderSlice.reducer,
    global: persistedGlobalReducer,
    popup: popupSlice.reducer,
    [searchCityApi.reducerPath]: searchCityApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(searchCityApi.middleware),
});

// Export global store state type
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
