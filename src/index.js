import React from 'react';

import { Provider } from 'react-redux';
import store from './store';

import Routes from './routes';

// import { Container } from './styles';

const Main = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default Main;
