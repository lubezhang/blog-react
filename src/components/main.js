// var Login = require('./login');

import React from 'react';
import ReactBootstrap, { Grid, Row, Col } from 'react-bootstrap';

import Login from './login';

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