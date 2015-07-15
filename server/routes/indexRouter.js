var mongodb = require("../models/db");

exports.getIndexData = function(callback){
	console.log("=============== getIndexData() ======================");
	mongodb.findAll("topic","", function(err, topicLists){
		callback(err, topicLists);
	});
};