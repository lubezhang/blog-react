import AppDispatcher from '../AppDispatcher.js';
import { ACTION_AUTH_LOGIN } from '../constants/Constants';

export default {
    topicList: function(){
        AppDispatcher.dispatch({
          actionType: ACTION_AUTH_LOGIN,
          username: username,
          password: password
        });
    }
}