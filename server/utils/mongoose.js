var mongoose = require('mongoose');
mongoose.connect('mongodb://10.16.93.35/blog1');
mongoose.connection.on('error', function(err){
    console.log("连接错误："+err);
});
// var db = mongoose.createConnection('10.16.93.35','blog1'); //创建一个数据库连接
// db.on('error',console.error.bind(console,'连接错误:'));
// db.once('open',function(){
//     console.log("打开数据连接");
// });

module.exports = mongoose;