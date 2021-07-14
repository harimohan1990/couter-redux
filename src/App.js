import React from 'react';
import { Provider } from 'react-redux';
import Counter from './components/counter';
import store from '../src/store/store';
import './App.css';
function App () {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
export default App;