import React from 'react';
import {StaticRouter as Router} from "react-router-dom";

import App from '../index';

export default (location,context) => {
    return (
        <Router location={location} context={context}>
            <App/>
        </Router>
    )
};
