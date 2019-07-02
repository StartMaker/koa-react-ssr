import React from 'react';
import {StaticRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {ConfigProvider} from 'antd';
import store from '../config/store';
// import 'hotcss/src/hotcss'

import App from '../index';

export default (location, context) => {
    return (
      <Provider store={store}>
        <Router location={location} context={context}>
          <ConfigProvider>
            <App/>
          </ConfigProvider>
        </Router>
      </Provider>
    )
};
