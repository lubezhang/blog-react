import BaseStore from './BaseStore';
import { ACTION_AUTH_LOGIN } from '../constants/Constants';

class AuthStore extends BaseStore {
    constructor() {
        super();
        this.subscribe(() => this._registerToActions.bind(this))
    }

    _registerToActions(action) {
        switch(action.actionType){
            case ACTION_AUTH_LOGIN:
                this.emitChange();
                break;
        }
    }

    isLogin() {
        return true;
    }
}

export default new AuthStore();