
import React from 'react';
import { Provider } from 'react-redux';
import RootNavigation from './src/navigation/RootNavigation';
import { store,persistor } from './src/redux/store';
import 'react-native-get-random-values'
import { PersistGate } from 'redux-persist/integration/react';



export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootNavigation/>
      </PersistGate>

    </Provider>
  );
}

