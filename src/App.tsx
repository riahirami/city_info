import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native-size-scaling';
import { Provider } from 'react-redux';
;

import Layout from './Layout';
import { store } from './store/features/store';

const App = (): JSX.Element => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={appStyles.appContainer}>
        <Provider store={store}>
          <Layout />
        </Provider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};
const appStyles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});

export default App;
