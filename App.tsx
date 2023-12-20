import {UIManager} from 'react-native';
import React from 'react';
import {persistor, store} from './src/Redux/Store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Screen from './src/Screen';
import {isAndroid} from './src/Utils/Platfform';

if (isAndroid()) {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Screen />
      </PersistGate>
    </Provider>
  );
};

export default App;
