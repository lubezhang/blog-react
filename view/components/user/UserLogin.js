import React from 'react';
import { Input, Button, Alert } from 'react-bootstrap';
import AuthService from '../../services/AuthService';
import AuthStore from '../../stores/AuthStore';

var UserLogin = React.createClass({
    getInitialState: function(){
        return {
            username: "lubezhang@gmail.com",
            password: "111111",
            isLogin: {
                resultCode: 0
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
                resultCode: 0
            }
        });
    },
    render: function(){
        var alert;
        if(this.state.isLogin.resultCode !== 0 ){
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
        return { isLogin: AuthStore.isLogin() };
    }
});

export default UserLogin;