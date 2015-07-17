var router = require('express').Router();

var User = require("../models/User.js");
var messageUtils = require("../utils/messageUtils.js");


router.route("/user").get(function(req, res){
	User.find(function(err, userList) {
		messageUtils.returnData(res, {data: userList});
	});
})

router.route("/user/login").post(function(req, res){
	User.findOne({
		username: req.body.username,
		password: req.body.password
	},function(err, user) {
		if(err || user === undefined || user === null){
			messageUtils.fail(res, 101 ,"登录失败！");
		} else {
			messageUtils.returnData(res, {data: user, message: "登录成功"});
		}
	});
})

module.exports = router;