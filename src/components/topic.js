import React from 'react';

var Topic = React.createClass({
    render: function(){
        return (
            <div className="topic-cell">
                <a className="user-avatar" href="javascritp: void(0);">
                    <img src="https://cnodejs.org/agent?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F8925223%3Fv%3D3%26s%3D120" title="daliniu" />
                </a>
                <span className="reply-count">20/100</span>
                <a href="javascritp: void(0);">标题d</a>
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

export default {
    TopicList, Topic
}