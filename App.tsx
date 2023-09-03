import React from 'react';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { toastConfig } from 'src/config/Toast';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import NavigationHandler from 'navigation/index';
// import NavigationHandler from 'navigation/index';

declare const global: { HermesInternal: null | {} };

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <NavigationHandler />
        <Toast config={toastConfig} topOffset={70} />
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
