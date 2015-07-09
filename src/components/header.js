import React from 'react';
import ReactBootstrap, { Navbar, Nav, NavItem } from 'react-bootstrap';
import ReactRouterBootstrap, { NavItemLink } from 'react-router-bootstrap';

var Header = React.createClass({

    render: function() {
        return (
            <Navbar brand='Blog' toggleNavKey={0}>
                <Nav right eventKey={0}>
                    <NavItemLink to="main" className="">首页</NavItemLink>
                    <NavItemLink to="about" >关于</NavItemLink>
                    <NavItemLink to="register" >注册</NavItemLink>
                    <NavItemLink to="login" >登录</NavItemLink>
                </Nav>
            </Navbar>
        );
    }

});

export default Header;