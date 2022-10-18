//mongoose dependencies
const mongoose = require("mongoose");
const { Schema } = mongoose;

//comment schema
//name, user, comment, post
const commentSchema = new Schema ({
    name: { type: String, default: "Anonymous" },
    user : { type: Schema.Types.ObjectId, required: true },
    comment: { type: String, required: true },
    post: { type: Schema.Types.ObjectId, ref: "Post", required: true }
});

//export
module.exports = mongoose.model("Comment", commentSchema);