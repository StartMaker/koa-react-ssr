import {hydrate} from 'react-dom';
import React from 'react';
import App from '../index.js';
import {Provider} from 'react-redux';
import store from '../config/store';
import {ConfigProvider} from "antd";
// import 'hotcss/src/hotcss';

import {BrowserRouter as Router} from "react-router-dom";

hydrate(
  <Provider store={store}>
    <ConfigProvider>
      <Router>
        <App/>
      </Router>
    </ConfigProvider>
  </Provider>,
  document.getElementById('root')
);