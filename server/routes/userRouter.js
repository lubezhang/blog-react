var mongodb = require("../models/db");
var User = require("../models/User.js");
var messageUtils = require("../models/messageUtils.js");

exports.router = function(app){
	var moduleName = "/"+app.get("moduleName");

	app.get(moduleName+'/reg', function(req, res) {
		res.render('reg', { title: '注册', user:req.session.user});
	});

	app.get(moduleName+'/login', function(req, res) {
		res.render('login', { title: '登录', user:req.session.user});
	});

	// 保存注册信息
	app.post(moduleName+'/reg', function(req,res){
		var newUser = new User({
			username:req.body.username || ""
		});
		delete newUser.password;
		User.find(newUser, function(err, user){
			if(user){
				messageUtils.failure(res, "邮件地址已经存在！");
			} else {
				newUser.password = req.body.password;
				newUser.save(function(err){
					if(err){
						messageUtils.failure(res, "新建用户失败！");
					} else {
						messageUtils.success(res, "新建用户成功！");
					}
				});
			}
		});
	});

	app.post(moduleName+'/login', function(req, res){
		console.log('user/login');
		var newUser = new User({
			username:req.body.username || "",
			password:req.body.password || ""
		});

		console.log(req.body.username);
		console.log(req.body.password);
		User.find(newUser, function(err, user){
			if(user){
				// messageUtils.success(res, "用户登录成功！");
				messageUtils.returnData(res, {message: "用户登录成功！", data: user});
				delete user.password;
				req.session.user = user;
				// req.flash();
			} else {
				messageUtils.failure(res, "用户登录失败！");
				// messageUtils.returnData(res, {status: false, message: "用户登录失败！"});
			}
		});
	});
};