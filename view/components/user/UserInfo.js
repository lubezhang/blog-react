import React from 'react';
import AuthStore from '../../stores/AuthStore';

var UserInfo = React.createClass({
    getInitialState: function() {
        return {
            username: "" 
        };
    },
    componentDidMount: function() {
        this.setState(AuthStore.getUserInfo());
    },
    render: function(){
        return (
            <div className="login-container">
                <div className="login-title">个人信息</div>
                <div className="login-content">{this.state.username}</div>
            </div>
        );
    }
});

export default UserInfo;