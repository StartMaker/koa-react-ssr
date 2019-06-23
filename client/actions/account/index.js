import req from '../async_config';
import {account} from "../action_type";

//account逻辑操作

/*
* 登录操作
* */
export const login = (username, password) =>async dispatch => {
    let {data} = await req.post('/api/login',{username, password});
    sessionStorage.setItem('Authorization',data.msg.jwt);
    return dispatch({
        type: account.login,
        response_data: data
    });
};

/*
* 登录（根据Authorization）
* */
export const loginForAuthorization = () => async dispatch => {
    let {data} = await req.get('/api/loginByAuthorization');
    console.log(data);
    return dispatch({
        type: account.login,
        response_data: data
    })
};

export const register = (username, password) => async dispatch => {

};