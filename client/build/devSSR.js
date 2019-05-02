import {render} from 'react-dom';
import React from 'react';
import App from '../index.js';

import {BrowserRouter as Router} from "react-router-dom";

render(
    <Router>
        <App/>
    </Router>,
    document.getElementById('root')
);