import request from 'reqwest';
import when from 'when';

import BaseStore from './BaseStore';
import { URL_REMOTE_API } from '../constants/Constants';

class TopicStore extends BaseStore {
    constructor() {
        super();
        this.subscribe(() => this._registerToActions.bind(this))
    }

    _registerToActions(action) {
        switch(action.actionType){
            case "sdf":
                
                break;
        }
    }

    getTopicList() {
        when(request({
            url: URL_REMOTE_API + "topic/list",
            method: 'POST',
            crossOrigin: true,
            type: 'json',
            data: {
                
            }
        })).then(function(list){
            debugger;
        })
        return [];
    }
}

export default new TopicStore();