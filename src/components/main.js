// var Login = require('./login');

import React from 'react';
import ReactBootstrap, { Grid, Row, Col } from 'react-bootstrap';

import Login from './Login';
import { TopicList } from './Topic';
import TopicStore from '../stores/TopicStore';

var Main = React.createClass({
    getInitialState: function() {
        return {
            topicList: [] 
        };
    },
    componentDidMount: function() {
        this.setState({
            topicList: TopicStore.getTopicList() 
        });
    },
    render: function() {
        return (
            <div className="row">
                <div className="col-md-9 topic-list-container ">
                    <TopicList items={["item1", "item2", "item3"]}/>
                </div>
                <div className="col-md-3">
                    <Login />
                </div>
            </div>
        );
    }
});

export default Main;