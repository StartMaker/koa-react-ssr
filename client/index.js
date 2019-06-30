import React from 'react';
import {hot} from "react-hot-loader";
import {Route, Switch} from 'react-router-dom';

import './static/styles/reset.less';
import Homepage from './pages/homepage';
// import WriteArticle from './pages/writeArticle'
import {Provider} from './config/context';

class App extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount() {

    }

    render(){
        return (
            <Provider value={{}}>
                <Switch>
                    <Route path={'/page/homepage'} component={Homepage} exact/>
                    {/*<Route path={'/page/homepage(/:id)'} component={Homepage} />*/}
                    {/*<Route path={'/page/writeArticle'} component={WriteArticle} />*/}
                </Switch>
            </Provider>
        )
    }
}

export default App;