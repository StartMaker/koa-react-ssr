import React from 'react';
import {hot} from "react-hot-loader";
import {Route} from 'react-router-dom';
import 'hotcss/src/hotcss';

import Homepage from './pages/homepage';
import {Provider} from './config/context';

class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Provider>
                <Route path={'/page/homepage'} component={Homepage} key={1} exact/>
                <Route path={'/page/homepage/:id'} component={Homepage} key={2}/>
            </Provider>
        )
    }
}

export default hot(module)(App);