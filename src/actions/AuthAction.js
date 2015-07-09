import AppDispatcher from '../AppDispatcher.js';
import { ACTION_AUTH_LOGIN } from '../constants/Constants';

export default {
    login: function(username, password){
        AppDispatcher.dispatch({
          actionType: ACTION_AUTH_LOGIN,
          username: username,
          password: password
        });
    }
}