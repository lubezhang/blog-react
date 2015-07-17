import requestUtils from '../utils/requestUtils';

import { URL_TOPIC_LIST } from '../constants/Constants';
import TopicAction from '../actions/TopicAction';

class TopicService {
    getTopicList() {
        requestUtils.get(URL_TOPIC_LIST).then(function(data) {
            TopicAction.getTopicList(data.data);
        })
    }
}

export default new TopicService();