import axios from 'axios';
import url from '../../url';

//axios全局配置
axios.interceptors.request.use(function (config) {
    config.headers = {
        'Accept': "application/json, text/plain, */*",
        'Content-Type': "application/json;charset=utf-8",
        'Authorization': ''
        // 'Authorization': sessionStorage.getItem('Authorization')
    };
    config.timeout = 5000;
    config.baseURL = url;
    return config;
});

//get、post请求封装
const req = {
    post: (path, obj) =>{
        return axios.post(path, obj);
    },
    get: (path, obj) => {
        console.log(obj);
        switch (obj) {
            case null:
                return axios.get(path);
            case undefined:
                return axios.get(path);
            default:
                let req_data = "";
                Object.keys(obj).forEach(item => {
                    req_data = req_data + item + "=" + obj[item]
                });
                return axios.get(path + "?" + req_data);
        }
    }
};

export default req;