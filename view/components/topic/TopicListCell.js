import React from 'react';

var TopicListCell = React.createClass({
    titleHandle: function(e){
        alert(e.target.text);
    },
    render: function(){
        return (
            <div className="topic-cell">
                <a className="user-avatar" href="javascritp: void(0);">
                    <img src="/img/user-icon.png" title={this.props.topic.userId} />
                </a>
                <span className="reply-count">20/100</span>
                <a href="javascritp: void(0);" onClick={this.titleHandle}>{this.props.topic.title}</a>
            </div>
        );
    }
});

export default TopicListCell;