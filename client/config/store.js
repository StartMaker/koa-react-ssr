import {combineReducers} from "redux";
import {createStore,applyMiddleware} from "redux";
import redux_thunk from 'redux-thunk';
import redux_logger from 'redux-logger';

import post from '../reducers/post';
import account from '../reducers/account';

const reducers = combineReducers({
    account,
    post
});
const init_state = {
    account:{
        username: null,
        token: undefined,
        login_status: false
    },
    post: {}
};

export default createStore(
    reducers,
    init_state,
    applyMiddleware(redux_logger,redux_thunk)
)

export {init_state};

