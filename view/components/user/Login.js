import React from 'react';
import AuthStore from '../../stores/AuthStore';

import UserInfo from "./UserInfo";
import UserLogin from "./UserLogin";

var Login = React.createClass({
    getInitialState: function() {
        return this.getLoginState();
    },
    componentDidMount: function() {
        AuthStore.addChangeListener(this._onChange);
    },
    componentWillMount: function() {
        AuthStore.removeChangeListener(this._onChange);
    },
    render: function(){
        if(this.state.isLogin.resultCode === 0){
            return (
                <UserInfo />
            )
        } else {
            return (
                <UserLogin/>
            )
        }
    },
    _onChange: function(){
        this.setState(this.getLoginState());
    },
    getLoginState: function(){
        return {isLogin: AuthStore.isLogin()};
    }
});

export default Login;
