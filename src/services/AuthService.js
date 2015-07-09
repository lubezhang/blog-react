import { ACTION_AUTH_LOGIN } from '../constants/Constants';
import AuthAction from '../actions/AuthAction';

class AuthService {
    login(username, password){
        AuthAction.login(username, password);
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