import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, StoreProvider } from 'easy-peasy';

import './index.css';
import App from './App';
import model from './model';

const store = createStore(model, {
  name: 'Ranterrr Store'
});

ReactDOM.render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>,
  document.querySelector('#root')
);
