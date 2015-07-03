import React from 'react';

var Topic = React.createClass({
    titleHandle: function(e){
        alert(e.target.text);
    },
    render: function(){
        return (
            <div className="topic-cell">
                <a className="user-avatar" href="javascritp: void(0);">
                    <img src="https://cnodejs.org/agent?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F8925223%3Fv%3D3%26s%3D120" title="daliniu" />
                </a>
                <span className="reply-count">20/100</span>
                <a href="javascritp: void(0);" onClick={this.titleHandle}>{this.props.title + new Date().getTime()}</a>
            </div>
        );
    }
});

var TopicList = React.createClass({
    render: function(){
        var topList =  this.props.items.map(function(item, i){
            return <Topic title={item}/> ;
        }, this);
        return (
            <div className="topic-container">
                { topList }
            </div>
        );
    }
});

export default {
    TopicList, Topic
}