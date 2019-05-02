import React from 'react';
import {StaticRouter as Router} from "react-router-dom";
// import ReactDOMServer from 'react-dom/server';
// import layout from './layout';
// const {layout} = require('./layout');

import App from '../index';

export default (location,context) => {
    return (
        <Router location={location} context={context}>
            <App/>
        </Router>
    )
};

// export default content;
// let Template = (location) => {
//     const body = ReactDOMServer.renderToString(
//         <Router location={location} context={{}}>
//             <App/>
//         </Router>
//     );
//     return layout(body);
// };
//
// module.exports.render = async (ctx, next) => {
//     ctx.body = Template();
// };