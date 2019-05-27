import {account} from "../actions/action_type";

export default function (state = {}, action) {
    switch (action.type) {
        case account.login:
            return state;
        case account.register:
            return state;
        default:
            return state;
    }
}