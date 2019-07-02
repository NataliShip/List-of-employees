import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './scss/index.scss';
import { store } from './configStore'
import List from './components/List';

ReactDOM.render(
  <Provider store={store}>
    <List />
  </Provider>,
  document.getElementById('root')
);

