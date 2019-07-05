import React from 'react';
import {StaticRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {ConfigProvider} from 'antd';
import store from '../config/store';
import StyleContext from 'isomorphic-style-loader/StyleContext';
// import 'hotcss/src/hotcss'

import App from '../index';

export default (location, context, insertCss) => {

  return (
    <StyleContext.Provider value={{insertCss}}>
      <Provider store={store}>
        <Router location={location} context={{...context, insertCss}}>
          <ConfigProvider>
            <App/>
          </ConfigProvider>
        </Router>
      </Provider>
    </StyleContext.Provider>
  )
};
