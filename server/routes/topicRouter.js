var router = require('express').Router();

var Topic = require("../models/Topic.js");
var messageUtils = require("../utils/messageUtils.js");


router.route("/topic").get(function(req, res){
	debugger;
	console.dir("/api/topic ==== " + req.session.user);
	Topic.find(function(err, topicList) {
		messageUtils.returnData(res, {data: topicList});
	});
})

router.route("/topic/:topicId")
	.get(function(req, res){
		// 根据ID查询topic的详细信息
		Topic.findById(req.params.topicId, function(err, topic) {
			messageUtils.returnData(res, {data: topic});
		});
	})
	.put(function(req, res){
		// 更新topic的内容
	})
	.delete(function(req, res){
		Topic.remove({_id: req.params.topicId}, function(err, topic){
			if(err){
				messageUtils.returnData(res, err);
			} else {
				messageUtils.returnData(res, "删除成功1");
			}
		});
	})

module.exports = router;