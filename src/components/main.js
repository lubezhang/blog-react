var React = require('react');
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;

var Topic = React.createClass({
    render: function(){
        return (
            <div className="topic-cell">
                <a className="user-avatar" href="javascritp: void(0);">
                    <img src="https://cnodejs.org/agent?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F8925223%3Fv%3D3%26s%3D120" title="daliniu" />
                </a>
                <span className="reply-count">20/100</span>
                <a href="javascritp: void(0);">标题</a>
            </div>
        );
    }
});

var TopicList = React.createClass({
    render: function(){
        return (
            <div className="topic-container">
                <Topic />
                <Topic />
                <Topic />
                <Topic />
                <Topic />
            </div>
        );
    }
});

var Login = React.createClass({
    render: function(){
        return (
            <div className="login-container">
                <div className="login-title">个人信息</div>
                <div className="login-content">用户信息</div>
            </div>
        );
    }
});

var Main = React.createClass({
    render: function() {
        return (
            <div className="row">
                <div className="col-md-9 topic-list-container ">
                    <TopicList />
                </div>
                <div className="col-md-3">
                    <Login />
                </div>
            </div>
        );
    }

});

module.exports = Main;