// var Login = require('./login');

import React from 'react';
import ReactBootstrap, { Grid, Row, Col } from 'react-bootstrap';

import Login from './login';
import { TopicList } from './topic';

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

export default Main;