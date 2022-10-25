const { default: mongoose } = require("mongoose");
const db = require("../models");

const userId = "6356ff482e8af4d121983adb";
const postId = "63572edbddf5dc38e0a6b0fb"

//seed comments
//run seed posts first, and replace id values with ids from new posts
db.Comment.create([{
    name: "Test Person",
    user: userId,
    comment: "Test Comment",
    post: postId
},
{
    user: userId,
    comment: "Test Comment",
    post: postId
}])
.then (() => {
    console.log("Successfuly seeded comments");
    mongoose.connection.close(); 
});