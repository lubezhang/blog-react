import React from 'react';

import TopicStore from '../../stores/TopicStore';
import TopicService from '../../services/TopicService';

import TopicListCell from "./TopicListCell";


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
            return <TopicListCell topic={item}  /> ;
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

export default TopicList;
