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
                
                // if(action.data.data){
                //     this.userInfo = action.data.data;
                //     StorageUtils.setStorage(this.userInfo.username, action.data);
                // } else {
                //     this.message = action.data.message;
                // }
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
        return this.userInfo;
    }

    /**
     * 判断是否登录
     * @return {Boolean} [description]
     */
    isLogin() {
        // if(!this.userInfo){
        //     return {success: false  }
        // }
        // let userData = StorageUtils.getStorage(this.userInfo.username);
        // return userData?{success: userData.success, message: userData.message}:{success: false, message: this.message};
        return this.userData?this.userData:{success: false};
    }
}

export default new AuthStore();