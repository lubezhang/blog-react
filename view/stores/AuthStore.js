import BaseStore from './BaseStore';
import { ACTION_AUTH_LOGIN } from '../constants/Constants';
import StorageUtils from '../utils/StorageUtils';

class AuthStore extends BaseStore {

    constructor() {
        super();
        this.subscribe(() => this._registerToActions.bind(this));

        // this.userData =  {
        //     resultCode: null,
        //     message: ""
        // }

        this.loginInfoStorage = "stroage";  // session / stroage
    }

    _registerToActions(action) {
        switch(action.actionType){
            case ACTION_AUTH_LOGIN:
                // this.userData = action.data;
                if("session" === this.loginInfoStorage){

                } else if("storage" === this.loginInfoStorage){
                    
                }

                if(action.resultCode){

                }
                StorageUtils.set("CONST_USER_KEY", action.data);
                this.emitChange();
                break;
        }
    }

    getUserData(){
        return StorageUtils.get("CONST_USER_KEY") ||  {resultCode: null, message: ""};
    }

    /**
     * 获取登录用户的信息
     * @return {[type]} [description]
     */
    getUserInfo(){
        return this.getUserData().data;
    }

    /**
     * 判断是否登录
     * @return {Boolean} [description]
     */
    isLogin() {
        return this.getUserData();
    }
}

export default new AuthStore();