import React from 'react';

import TopicStore from '../stores/TopicStore';
import TopicService from '../services/TopicService';

var Topic = React.createClass({
    titleHandle: function(e){
        alert(e.target.text);
    },
    render: function(){
        return (
            <div className="topic-cell">
                <a className="user-avatar" href="javascritp: void(0);">
                    <img src="https://cnodejs.org/agent?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F8925223%3Fv%3D3%26s%3D120" title={this.props.topic.userId} />
                </a>
                <span className="reply-count">20/100</span>
                <a href="javascritp: void(0);" onClick={this.titleHandle}>{this.props.topic.topicTitle}</a>
            </div>
        );
    }
});

var TopicList = React.createClass({
    getInitialState: function() {
        return this.getTopicList();
    },
    componentDidMount: function() {
        TopicStore.addChangeListener(this._onChange);
        TopicService.getTopicList();
    },
    componentWillMount: function() {
        TopicStore.removeChangeListener(this._onChange);
    },
    render: function(){
        var topList =  this.state.topicList.map(function(item, i){
            return <Topic topic={item}  /> ;
        }, this);
        return (
            <div className="topic-container" >
                {topList}
            </div>
        );
    },
    _onChange: function(){
        this.setState(this.getTopicList());
    },
    getTopicList: function(){
        return {topicList: TopicStore.getTopicList()}; 
    }
});

export default {
    TopicList, Topic
}