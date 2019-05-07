import {render} from 'react-dom';
import React from 'react';
import App from '../index.js';
import {Provider} from 'react-redux';
import store from '../config/store';
import {ConfigProvider} from "antd";

import {BrowserRouter as Router} from "react-router-dom";

render(
    <Provider store={store}>
        <ConfigProvider>
            <Router>
                <App/>
            </Router>
        </ConfigProvider>
    </Provider>,
    document.getElementById('root')
);