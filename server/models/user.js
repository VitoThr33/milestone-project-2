//mongoose dependencies
const mongoose = require("mongoose");
const { Schema } = mongoose;

//user schema
//username, email, password

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, { toJSON: { virtuals: true }});

//posts virtual
userSchema.virtual("posts", {
    ref: "Post",
    localField: "_id",
    foreignField: "user"
});

//comments virtual
userSchema.virtual("comments", {
    ref: "Comment",
    localField: "_id",
    foreignField: "user"
});

//export user
module.exports = mongoose.model("User", userSchema);