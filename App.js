
import React from 'react';
import { Provider } from 'react-redux';
import RootNavigation from './src/navigation/RootNavigation';
import { store } from './src/redux/store';
import 'react-native-get-random-values'

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigation/>
    </Provider>
  );
}

