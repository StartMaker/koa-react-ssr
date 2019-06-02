import {combineReducers} from "redux";
import {createStore,applyMiddleware} from "redux";
import redux_thunk from 'redux-thunk';
import redux_logger from 'redux-logger';

import blog from '../reducers/blogs';
import account from '../reducers/account';

const reducers = combineReducers({
    account,
    blog
});
const init_state = {
    account:{
        username: null,
        token: undefined,
        login_status: false
    },
    blog: {
        content: []
    }
};

export default createStore(
    reducers,
    init_state,
    applyMiddleware(redux_logger,redux_thunk)
)

export {init_state};

