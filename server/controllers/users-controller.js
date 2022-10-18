//dependencies and router setup
const router = require("express").Router();
const db = require("../models");
const { User } = db;

//GET all users
router.get("/", async (req, res) => {
    try {
        const foundUsers = await User.find();
        res.status(200).json(foundUsers);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET user by ID and all related posts and comments
router.get("/:id", async (req, res) => {
    try {
        const foundUser = await User.findById(req.params.id);
        await foundUser.populate("posts");
        await foundUser.populate("comments");
        res.status(200).json(foundUser);
    } catch (err) {
        res.status(500).json(err);
    }
});

//POST register a user
router.post("/register", async (req, res) => {
    try {
        const createdUser = await User.create(req.body);
        console.log("Created User:", createdUser);
        res.status(200).json(createdUser);
    } catch (err) {
        if (err.name === "ValidationError") {
            let errorMessage = "Validation Error(s): "
            for (let field in err.errors) {
                errorMessage += `${field} was ${err.errors[field].value}. `
                errorMessage += `${err.errors[field].message} `
            }
            console.log(errorMessage);
            res.status(500).json(errorMessage)
        } else {
            res.json({
                duplicate: err.keyValue,
                message: "already in use"
            })
        }
    }
});

//POST authenticate login
router.post("/auth", async (req, res) => {
    try {
        const foundUser = await User.findOne({ username: req.body.username });
        if (foundUser && req.body.password === foundUser.password) {
            res.status(200).json({
                status: "success"
            });
        } else {
            res.status(500).json({
                status: "failed"
            });
        }
    } catch (err) {
        res.status(500).json({
            status: "failed"
        });
    }
});

//PUT update user info
router.put("/:id", async (req, res) => {
    try {
        const foundUser = await User.findByIdAndUpdate(req.params.id, req.body, 
            {runValidators: true}
        );
        console.log("Updated user at ID", req.params.id);
        res.status(200).json({
            message: `Updated user at ${req.params.id}`
        });
    } catch (err) {
        if (err.name === "ValidationError") {
            let errorMessage = "Validation Error(s): "
            for (let field in err.errors) {
                errorMessage += `${field} was ${err.errors[field].value}. `
                errorMessage += `${err.errors[field].message} `
            }
            console.log(errorMessage);
            res.status(500).json(errorMessage)
        } else {
            res.json({
                duplicate: err.keyValue,
                message: "already in use"
            })
        }
    }
});

//DELETE a user
router.delete("/:id", async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        console.log(`Deleted user`);
        res.status(200).json({
            message: "Deleted User"
        })
    } catch (err) {
        res.status(500).json(err);
    }
}) ;

//export
module.exports = router;