import req from '../async_config';
import {account} from "../action_type";

export const login = (username, password) =>async dispatch => {
    let {data} = await req.post('/api/login',{username, password});
    return dispatch({
        type: account.login,
        response_data: data
    });
};