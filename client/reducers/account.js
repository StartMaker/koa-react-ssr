import {Map} from 'immutable';
import {account} from "../actions/action_type";

export default function (state = Map({}), action) {
    switch (action.type) {
        case account.login:
            const {code, msg, err} = action.response_data;
            if(code === 0){
                return {
                    loginStatus: true,
                    code: code,
                    time: Date.now(),
                    username: msg.username
                };
            }
            return {
                loginStatus: false,
                time: Date.now(),
                msg: msg,
                err: err,
                code: code
            };
        case account.register:
            return state;
        default:
            return state;
    }
}