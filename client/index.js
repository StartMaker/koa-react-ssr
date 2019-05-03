import React from 'react';
import {hot} from "react-hot-loader";
import {Route} from 'react-router-dom';

import Homepage from './pages/homepage';

class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Route path='/homepage' component={Homepage} exact/>
        )
    }
}

export default hot(module)(App);