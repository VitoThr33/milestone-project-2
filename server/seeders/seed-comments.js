const { default: mongoose } = require("mongoose");
const db = require("../models");

const userId = "634e01388562060b4cf58285";
const postId = "634e0170ae7e961dc56c33cb"

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