import AppDispatcher from '../AppDispatcher.js';
import { ACTION_AUTH_LOGIN } from '../constants/Constants';

export default {
    login: function(data){
        AppDispatcher.dispatch({
          actionType: ACTION_AUTH_LOGIN,
          data: data
        });
    }
}