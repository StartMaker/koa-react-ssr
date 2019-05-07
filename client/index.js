import React from 'react';
import {hot} from "react-hot-loader";
import {Route} from 'react-router-dom';
import 'hotcss/src/hotcss';

import Homepage from './pages/homepage';

class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            [
                <Route path={'/homepage'} component={Homepage} key={1} exact/>,
                <Route path={'/homepage/:id'} component={Homepage} key={2}/>
            ]
        )
    }
}

export default hot(module)(App);