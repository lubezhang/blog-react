var mongoose = require("../utils/mongoose");
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var TopicSchema = new Schema({
    author: ObjectId,
    title: String,
    listTime: Date,
    create: Date
});

var TopicModel = mongoose.model("Topic", TopicSchema);

module.exports = TopicModel;