import React from 'react';
import ReactBootstrap, { Navbar, Nav, NavItem } from 'react-bootstrap';
import ReactRouterBootstrap, { NavItemLink } from 'react-router-bootstrap';

import AuthStore from '../stores/AuthStore';

var Header = React.createClass({
    getInitialState: function() {
        return this.getLoginState();
    },
    componentDidMount: function() {
        AuthStore.addChangeListener(this._onChange);
    },
    componentWillMount: function() {
        AuthStore.removeChangeListener(this._onChange);
    },
    render: function() {
        var loginHide = "", userInfoHide = "";
        if(this.state.isLogin.resultCode === 0){
            loginHide = "hide";
            userInfoHide = "";
        } else {
            userInfoHide = "hide";
            loginHide = "";
        }

        return (
            <Navbar brand='Blog' toggleNavKey={0}>
                <Nav right eventKey={0}>
                    <NavItemLink to="main">首页</NavItemLink>
                    <NavItemLink to="register" className={loginHide}>注册</NavItemLink>
                    <NavItemLink to="login" className={loginHide}>登录</NavItemLink>
                    <NavItemLink to="login" className={userInfoHide}>设置</NavItemLink>
                </Nav>
            </Navbar>
        );
    },
    _onChange: function(){
        this.setState(this.getLoginState());
    },
    getLoginState: function(){
        return {isLogin: AuthStore.isLogin()};
    }

});

export default Header;
