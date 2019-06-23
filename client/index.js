import React from 'react';
import {hot} from "react-hot-loader";
import {Route, Switch} from 'react-router-dom';
import 'hotcss/src/hotcss';

import Homepage from './pages/homepage';
import WriteArticle from './pages/writeArticle';
import {Provider} from './config/context';

import './static/styles/reset.less';
import './static/styles/styles.less';

class App extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount() {

    }

    render(){
        return (
            <Provider>
                <Switch>
                    <Route path={'/page/homepage'} component={Homepage} key={1} exact/>
                    <Route path={'/page/homepage/:id'} component={Homepage} key={2}/>
                    <Route path={'/page/writeArticle'} component={WriteArticle} key={3}/>
                </Switch>
            </Provider>
        )
    }
}

export default hot(module)(App);