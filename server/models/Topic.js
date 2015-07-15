var mongodb = require("./db");

function Topic(){
	this.topicTitle;	//名称
	this.listTime;		//最后回复时间
	this.createTime; 
}

module.exports = Topic;