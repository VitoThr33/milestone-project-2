//dependencies
const express = require("express");
const cors = require("cors");
const methodOverride = require("method-override");

//configuration
require("dotenv").config({path: ".env"});
const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cors({
    origin: "*"
}));
app.use(methodOverride("_method"));

//GET /
app.get("/", (req, res) => {
    res.json({
        message: "Use /users, /posts or /comments for data"
    })
})

//import controllers and use

// /posts
app.use("/posts", require("./controllers/posts-controller"));

// /comments
app.use("/comments", require("./controllers/comments-controller"));

// /users
app.use("/users", require("./controllers/users-controller"));

//listen to port
app.listen(PORT, () => {
    console.log("Listening on port", PORT);
});