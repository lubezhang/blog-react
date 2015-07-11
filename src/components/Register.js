import React from 'react';
import { Input, Button } from 'react-bootstrap';

var Register = React.createClass({
	getInitialState: function(){
        return {
            email: "",
            password: "",
            rePwd: ""
        };
    },
    handleLogin: function(){
        
    },
    handleChange: function(){
        this.setState({
            username: this.refs.username.getValue(),
            password: this.refs.password.getValue(),
            rePwd: this.refs.rePwd.getValue()
        });
    },
    render: function(){
        return (
            <form className="form-signin">
                <Input type="text" value={this.state.email} ref="email" placeholder="邮件地址" onChange={this.handleChange} help="你的邮件地址，用于登录和显示"/>
                <Input type="password" value={this.state.password} ref="password" placeholder="登录密码" onChange={this.handleChange} />
                <Input type="password" value={this.state.rePwd} ref="rePwd" placeholder="确认密码" onChange={this.handleChange} />
                <Button bsStyle="primary" block onClick={this.handleLogin}>注册</Button>
            </form>
        );
    }
});

export default Register;