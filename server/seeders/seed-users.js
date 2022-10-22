const { default: mongoose } = require("mongoose");
const db = require("../models");

//seed users
//run first as other models need user ID
db.User.create([{
    username: "TestName",
    email: "Test Email",
    password: "asd"
},
{
    username: "TestName 2",
    email: "Test Email 2",
    password: "asd"
}])
.then(() => {
    console.log("Successfuly seeded users");
    mongoose.connection.close();
});