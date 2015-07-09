// var Login = require('./login');

import React from 'react';
import ReactBootstrap, { Grid, Row, Col } from 'react-bootstrap';

import Login from './Login';
import { TopicList } from './Topic';

var Main = React.createClass({
    render: function() {
        return (
            <div className="row">
                <div className="col-md-9 topic-list-container ">
                    <TopicList items={["标题1", "标题2", "标题3", "标题4"]}/>
                </div>
                <div className="col-md-3">
                    <Login />
                </div>
            </div>
        );
    }
});

export default Main;