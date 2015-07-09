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
    getInitialState: function(){
        return {
            username: "",
            password: ""
        };
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
    render: function(){
        return (
            <form className="login-container">
                <Input type="text" value={this.state.username} ref="username" placeholder="用户名" onChange={this.handleChange} />
                <Input type="password" value={this.state.password} ref="password" placeholder="密码" onChange={this.handleChange} />
                <ButtonInput value="登录"  bsStyle="primary" onClick={this.handleLogin}/>
            </form>
        );
    }
});

var Login = React.createClass({
    getInitialState: function() {
        return this.getLoginState();
    },
    componentDidMount: function() {
        this.changeListener = this._onChange.bind(this);
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
        this.setState(this.getLoginState());
    },
    getLoginState: function(){
        return {isLogin: AuthStore.isLogin()};
    }
});

export default Login;