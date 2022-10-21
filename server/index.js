//dependencies
const express = require("express");
const cors = require("cors");

//configuration
app.use(cors());
require("dotenv").config({path: ".env"});
const PORT = process.env.PORT;
const app = express();
app.use(express.json());

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