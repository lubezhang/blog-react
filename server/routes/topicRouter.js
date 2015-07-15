var mongodb = require("../models/db");
var Topic = require("../models/Topic.js");
var messageUtils = require("../models/messageUtils.js");
var indexRouter = require("./indexRouter");

exports.router = function(app){
	var moduleName = "/"+app.get("moduleName");

	app.get(moduleName + '/create', function(req, res) {
		res.render('topicCreate', { title: '发布主题', user:req.session.user });
	});

	app.post(moduleName + '/list', function(req, res) {
		indexRouter.getIndexData(function(err, topicLists){
			messageUtils.returnData(res, {data: topicLists});
		});
	});

	app.get(moduleName + '/list', function(req, res) {
		indexRouter.getIndexData(function(err, topicLists){
			messageUtils.returnData(res, {data: topicLists});
		});
	});

	app.post(moduleName+'/create', function(req,res){
		var currentTime = new Date();
		var topic = new Topic();
		topic.topicTitle = req.body.topicTitle;	//名称
		topic.topicContent = req.body.topicContent
		topic.listTime = currentTime;		//最后回复时间
		topic.createTime = currentTime; 
		topic.userId = req.session.user._id;

		mongodb.insert("topic", topic,function(err, model){
			if(err){
				messageUtils.failure(res, "发布主题失败！");
			} else {
				messageUtils.success(res, "发布主题成功！");
			}
		});
	});

};