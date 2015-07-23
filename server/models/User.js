var mongoose = require("../utils/mongoose");
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var UserSchema = new Schema({
    username: String,
    password: String
});

var UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;