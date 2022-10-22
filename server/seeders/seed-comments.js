const { default: mongoose } = require("mongoose");
const db = require("../models");

const userId = "6350b4d3b63edb670262072b";
const postId = "6350b4e7554929711bcfb9d3"

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