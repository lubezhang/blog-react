var settings = require("../settings");

var when = require("when");
var mongodb = require('mongodb');
var server = new mongodb.Server(settings.host, settings.port, {auto_reconnect: true});
var mongodb = new mongodb.Db(settings.dbName, server, {safe: true});

function closeCollection(){
	console.log("<<<<<<<<<<<< 关闭mongodb连接 <<<<<<<<<<<<");
	mongodb.close();
}

function open(tableName){
	console.log(">>>>>>>>>>>> 打开mongodb连接 >>>>>>>>>>>>");
	var deferred = when.defer();
	mongodb.open(function(err, db){
		if(err){
			deferred.reject(err);
		}
		deferred.resolve({
			db: db, 
			tableName: tableName
		});
	});

	return deferred.promise;
}

function connect(data){
	var deferred = when.defer();
	if(settings.develop){
		data.db.collection(data.tableName, function(err,collection){
			if(err){
				deferred.reject(err);
			}	
			deferred.resolve(collection);
		});
	} else {
		db.authenticate(settings.dbUserName, settings.dbPassword, function(err, result) { 
			if(err){
				deferred.reject(err);
			}

			db.collection(tableName, function(err,collection){
				if(err){
					deferred.reject(err);
				}
				deferred.resolve(model);
			});
		});
	}
	
	return deferred.promise;
}

function queryAll(collection){
	var deferred = when.defer();
	collection.find({}).toArray(function(err, model){
		if(err){
			deferred.reject(err);
		}
		closeCollection();
		deferred.resolve(model); 
	});

	return deferred.promise;
}

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

function findAll(tableName){
	return open(tableName)
		.then(connect)
		.then(queryAll);
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


module.exports = {
	insert: insert,
	findOne: findOne,
	findAll: findAll
}