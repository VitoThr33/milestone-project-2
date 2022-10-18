const db = require("../models");
const { default: mongoose } = require("mongoose");

const userId = "634e01388562060b4cf58285";

//seed posts
//run users first, replace userId with the id of a user
db.Post.create([{
    name: "Test Person",
    user: userId,
    sport: "Soccer",
    post: "Test Content"    
},
{
    user: userId,
    sport: "Baseball",
    post: "Test Content 2" 
},
{
    name: "Test Person 2",
    user: userId,
    sport: "Basketball",
    post: "Test Content 3" 
}])
.then (() => {
    console.log("Successfuly seeded posts");
    mongoose.connection.close(); 
});