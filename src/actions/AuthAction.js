import AppDispatcher from '../AppDispatcher.js';
import { ACTION_TOPIC_LIST } from '../constants/Constants';

export default {
    login: function(username, password){
        AppDispatcher.dispatch({
          actionType: ACTION_TOPIC_LIST
        });
    }
}