import React from 'react';
import { Input, ButtonInput } from 'react-bootstrap';
import AuthService from '../services/AuthService';
import AuthStore from '../stores/AuthStore';

var UserInfo = React.createClass({
    render: function(){
        return (
            <div className="login-container">
                <div className="login-title">个人信息</div>
                <div className="login-content">用户信息222</div>
            </div>
        );
    }
});

var UserLogin = React.createClass({
    loginHandle: function(){
        var loginResult = AuthService.login();
    },
    render: function(){
        return (
            <form className="login-container">
                <Input type="text" value="" placeholder="用户名" />
                <Input type="password" value="" placeholder="密码" />
                <ButtonInput value="登录"  bsStyle="primary" onClick={this.loginHandle}/>
            </form>
        );
    }
});

var Login = React.createClass({
    getInitialState: function() {
        return {isLogin: false};
    },
    componentDidMount: function() {
        AuthStore.addChangeListener(this._onChange);
    },
    componentWillMount: function() {
        AuthStore.removeChangeListener(this._onChange);
    },
    render: function(){
        if(this.state.isLogin){
            return (
                <UserInfo />
            )
        } else {
            return (
                <UserLogin />
            )
        }
    },
    _onChange: function(){
        this.setState({isLogin: AuthStore.isLogin()});
    }
});

export default Login;