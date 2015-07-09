import BaseStore from './BaseStore';
import { ACTION_AUTH_LOGIN } from '../constants/Constants';
import StorageUtils from '../utils/StorageUtils';

class AuthStore extends BaseStore {

    constructor() {
        super();
        this.subscribe(() => this._registerToActions.bind(this))
    }

    _registerToActions(action) {
        switch(action.actionType){
            case ACTION_AUTH_LOGIN:
                this.username = action.username;
                StorageUtils.setStorage(action.username, {loginTime: new Date().getTime()})
                this.emitChange();
                break;
        }
    }

    isLogin() {
        let userInfo = StorageUtils.getStorage(this.username);
        if(userInfo){
            return true;
        } else {
            return false
        }
    }
}

export default new AuthStore();