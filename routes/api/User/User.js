const router = require("express").Router();
const UserController = require("../../../controllers/UserController/UserController");
const db = require("../../../models");
const jwt = require("jsonwebtoken");
const express = require("express");
const fs = require("fs");
const config = require("../../../config/config");
const app = express();

app.set("superSecret", config.secret);

router.route("/")
    .get(UserController.getAllUsers);

router.post("/authenticate", function (req, res) {
    db.User.auth({
        emailAddress: req.body.emailAddress
    }, function (err, user) {
        if (err) throw err;

        if (!user) {
            res.status(400).json({
                success: false,
                message: "Authentication failed. User not found."
            });
        } else if (user) {
            if (user.password != req.body.password) {
                res.status(400).json({
                    success: false,
                    message: "Authentication failed. Not the right password."
                });
            } else {
                console.log(user.admin);
                const payload = {
                    emailAddress: user.emailAddress
                };

                const token = jwt.sign(payload, config.secret, {
                    expiresIn: 60 * 24
                });

                res.status(200).json({
                    success: true,
                    message: "Here's a token, don't spend it all at once",
                    token: token,
                    user: user
                });
            }
        }
    });
});

module.exports = router;
