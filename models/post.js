var mongoose = require("mongoose");

let today = new Date();
let dd = today.getDate().toString();
let mm = today.getMonth().toString();
let yyyy = today.getFullYear().toString();
var postSchema = mongoose.Schema({
    title: {type: String, required:true},
    content: {type:String, required:true},
    createdAt: {type:String, default:dd + "/" + mm +  "/" + yyyy},
    userID:{type:mongoose.Schema.Types.ObjectId, required:false, unique:false},
    name:{type:String, required:false}
});

var Post = mongoose.model("Post", postSchema);

module.exports = Post;