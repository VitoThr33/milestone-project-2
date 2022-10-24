//mongoose dependencies
const mongoose = require("mongoose");
const { Schema } = mongoose;

//post schema
//name, user, sport, post, image
const postSchema = new Schema ({
    name: { type: String, default: "Anonymous" },
    title: { type: String, required: true },
    user : { type: Schema.Types.ObjectId, required: true },
    sport: { type: String, required: true, enum: ["soccer", "baseball", "basketball", "football", "other"] },
    post: { type: String, required: true },
    image: { type: String, default: null }
}, { toJSON: { virtuals: true } });

//virtual
postSchema.virtual("comments", {
    ref: "Comment",
    localField: "_id",
    foreignField: "post"
})

//export post
module.exports = mongoose.model("Post", postSchema);