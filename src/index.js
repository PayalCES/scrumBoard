import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/home/HomePage';

const store = configureStore();
render(
  <Provider store={store}>
    <HomePage />
  </Provider>,
  document.getElementById('app')
);
