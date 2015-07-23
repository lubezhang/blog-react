import reqwest from 'reqwest';
import when from 'when';
import AuthStore from '../stores/AuthStore';

function request(url, method, params){
    params = params || {};
    var userInfo = AuthStore.getUserInfo();
    if(userInfo){
        params["userId"] = userInfo._id;
    }
    return when(reqwest({
        url: url,
        method: method,
        crossOrigin: true,
        type: 'json',
        data: params
    }))
}

function getJSON(url, params) {

    return when(reqwest({
        url: url,
        method: 'POST',
        // crossOrigin: true,
        type: 'json',
        data: params
    }))
}

function get(url, params){
    return request(url, "GET", params);
}

function post(url, params){
    return request(url, "POST", params);
}

function put(url, params){
    return request(url, "PUT", params);
}

function del(url, params){
    return request(url, "DELETE", params);
}

export default {
    get: get,
    post: post,
    put: put,
    del: del
}