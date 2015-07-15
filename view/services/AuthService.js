import { ACTION_AUTH_LOGIN, URL_USER_LOGIN } from '../constants/Constants';
import AuthAction from '../actions/AuthAction';
import reqUtils from '../utils/reqUtils';

class AuthService {
    login(username, password){
        reqUtils.getJSON(URL_USER_LOGIN, {"username": username, "password": password}).then(function(data) {
            AuthAction.login(data);
        })
        return true;
    }

    logout(){
        return true;
    }

    isLogin(){
        return true;
    }
}

export default new AuthService();