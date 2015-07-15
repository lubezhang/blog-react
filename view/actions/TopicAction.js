import AppDispatcher from '../AppDispatcher.js';
import { ACTION_TOPIC_LIST } from '../constants/Constants';

export default {
    getTopicList: function(topicList){
        AppDispatcher.dispatch({
          actionType: ACTION_TOPIC_LIST,
          topicList: topicList
        });
    }
}