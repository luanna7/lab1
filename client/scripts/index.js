import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import 'element-theme-default';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk)); //

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
