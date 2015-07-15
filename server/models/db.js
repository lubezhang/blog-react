var settings = require("../settings");

var mongodb = require('mongodb');
var server  = new mongodb.Server(settings.host,settings.port,{auto_reconnect:true});
var mongodb = new mongodb.Db(settings.dbName,server,{safe:true});

var MongodbUtils = function (){
	function connectDb(callback){
		
	};

	function closeCollection(){
		console.log("<<<<<<<<<<<< 关闭mongodb连接 <<<<<<<<<<<<");
		mongodb.close();
	}

	function connectCollection(tableName, callback){
		console.log(">>>>>>>>>>>> 打开mongodb连接 >>>>>>>>>>>>");
		mongodb.open(function(err, db){
			if(settings.develop){
				if(err){
					return callback(err);
				}

				db.collection(tableName, function(err,collection){
					if(err){
						closeCollection();
						return callback(err);
					}
					callback(err,collection);
				});
			} else {
				db.authenticate(settings.dbUserName, settings.dbPassword, function(err, result) { 
					if(err){
						return callback(err);
					}

					db.collection(tableName, function(err,collection){
						if(err){
							closeCollection();
							return callback(err);
						}
						callback(err,collection);
					});
				});
			}
		});
	};

	/**
	 * 查询指定表名中符合条件的一条记录
	 * @param  {string}   tableName 表名
	 * @param  {json对象}   model     存放查询条件的实体对象
	 * @param  {Function} callback  查询完成后的回调函数
	 * @return {[type]}             [description]
	 */
	function findOne(tableName, model, callback){
		connectCollection(tableName, function(err,collection){
			collection.findOne(model, function(err, model){
				closeCollection();
				callback(err, model);
			});
		});
	};

	function findAll(tableName, page, callback){
		connectCollection(tableName, function(err,collection){
			collection.find({}).toArray(function(err, model){
				closeCollection();
				callback(err, model);
			}) 
		});
	}

	/**
	 * [insert description]
	 * @param  {[type]}   tableName [description]
	 * @param  {[type]}   model     [description]
	 * @param  {Function} callback  [description]
	 * @return {[type]}             [description]
	 */
	function insert(tableName, model, callback){
		connectCollection(tableName, function(err,collection){
			collection.insert(model, {safe:true}, function(err, model){
				closeCollection();
				callback(err, model);
			});
		});
	};

	return{
		insert:insert,
		findOne:findOne,
		findAll:findAll
	}
}


var mongodbUtils = new MongodbUtils();

exports.insert  = mongodbUtils.insert;
exports.findOne = mongodbUtils.findOne;
exports.findAll = mongodbUtils.findAll;