import BaseStore from './BaseStore';
import { ACTION_AUTH_LOGIN } from '../constants/Constants';
import StorageUtils from '../utils/StorageUtils';

class AuthStore extends BaseStore {

    constructor() {
        super();
        this.subscribe(() => this._registerToActions.bind(this));

        this.userData =  {
            resultCode: null,
            message: ""
        }
    }

    _registerToActions(action) {
        switch(action.actionType){
            case ACTION_AUTH_LOGIN:
                this.userData = action.data;
                this.emitChange();
                break;
        }
    }

    /**
     * 获取登录用户的信息
     * @return {[type]} [description]
     */
    getUserInfo(){
        return this.userData.data;
    }

    /**
     * 判断是否登录
     * @return {Boolean} [description]
     */
    isLogin() {
        return {
            resultCode: this.userData.resultCode,
            message: this.userData.message
        };
    }
}

export default new AuthStore();