import reqUtils from '../utils/reqUtils';

import { URL_TOPIC_LIST } from '../constants/Constants';
import TopicAction from '../actions/TopicAction';

class TopicService {
    getTopicList() {
        reqUtils.getJSON(URL_TOPIC_LIST).then(function(list) {
            TopicAction.getTopicList(list);
        })
    }
}

export default new TopicService();