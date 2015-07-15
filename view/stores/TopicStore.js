import BaseStore from './BaseStore';
import { ACTION_TOPIC_LIST } from '../constants/Constants';

class TopicStore extends BaseStore {
    constructor() {
        super();
        this.subscribe(() => this._registerToActions.bind(this));
        this.topicList = [];
    }

    _registerToActions(action) {
        switch(action.actionType){
            case ACTION_TOPIC_LIST:
                this.topicList = action.topicList;
                this.emitChange();
                break;
        }
    }

    getTopicList() {
        return this.topicList || [];
    }
}

export default new TopicStore();