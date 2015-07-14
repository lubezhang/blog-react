import React from 'react';
import { Input, Button, Alert } from 'react-bootstrap';
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
    getInitialState: function(){
        return {
            username: "",
            password: "",
            isLogin: {
                success: true
            }
        };
    },
    componentDidMount: function() {
        AuthStore.addChangeListener(this._onChange);
    },
    componentWillMount: function() {
        AuthStore.removeChangeListener(this._onChange);
    },
    handleLogin: function(){
        AuthService.login(this.refs.username.getValue(), this.refs.password.getValue());
    },
    handleChange: function(){
        this.setState({
            username: this.refs.username.getValue(),
            password: this.refs.password.getValue()
        });
    },
    handleAlertDismiss: function() {
        this.setState({
            isLogin: {
                success: true
            }
        });
    },
    render: function(){
        var alert;
        if(this.state.isLogin.success === false ){
            alert = (
                <Alert bsStyle='danger' onDismiss={this.handleAlertDismiss} dismissAfter={2000}>
                    <p>{this.state.isLogin.message}</p>
                </Alert>
            );
        }
        return (
            <form className="form-signin login-container">
                {alert}
                <Input type="text" value={this.state.username} ref="username" placeholder="用户名" onChange={this.handleChange} />
                <Input type="password" value={this.state.password} ref="password" placeholder="密码" onChange={this.handleChange} />
                <Button bsStyle="primary" block onClick={this.handleLogin}>登录</Button>
            </form>
        );
    },
    _onChange: function(){
        this.setState(this.getLoginState());
    },
    getLoginState: function(){
        return {isLogin: AuthStore.isLogin(), userInfo: AuthStore.getUserInfo()};
    }
});

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
        if(this.state.isLogin.success === true){
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
        return {isLogin: AuthStore.isLogin(), userInfo: AuthStore.getUserInfo()};
    }
});

export default Login;
