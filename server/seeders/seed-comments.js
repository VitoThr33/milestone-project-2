const { default: mongoose } = require("mongoose");
const db = require("../models");

const userId = "6356ff482e8af4d121983adb";
const postId = "6358a06d2cc56bbbc33f665d"

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