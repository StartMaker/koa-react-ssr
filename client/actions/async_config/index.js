import axios from 'axios';
import url from '../../url';

axios.defaults = {
    baseURL: url,
    headers: {
        common: {
            Authorization: sessionStorage.getItem('Authorization')
        }
    },
    timeout: 5000
};

const req = {
    post: (path, obj) =>{
        return axios.post(path, obj);
    },
    get: (path, obj) => {
        let req_data = "";
        Object.keys(obj).forEach(item => {
            req_data = req_data + item + "=" + obj[item]
        });
        return axios.get(path + "?" + req_data);
    }
};

export default req;