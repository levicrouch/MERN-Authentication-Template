const db = require("../../models");
const jwt = require("jsonwebtoken");

module.exports = {
    //User Authentication
    auth: function (req, res) {
        screenName: req.body.screenName
    }, function(err, user) {
        if (err) throw err;

        if (!user) {
            res.status(400).json({
                success: false,
                message: "Authentication failed. User not found."
            });
            console.log("Controller UN");
        } else if (user) {
            if (user.password != req.body.password) {
                res.status(400).json({
                    success: false,
                    message: "Authentication failed. Not the right password."
                });
                console.log("Controller PW");
            } else {
                const payload = {
                    admin: user.admin
                };
                console.log("Controller Token");
                const token = jwt.sign(payload, app.get('superSecret'), {
                    expiresInMinutes: 1440
                });

                res.status(200).json({
                    success: true,
                    message: "Here's a token, don't spend it all in one place",
                    token: token
                });
            }
        }
    },
    getAllUsers: function (req,res){
        db.User
            .find(req.query)
            .sort({ id: -1 })
            .then(dbModel => res.status(200).json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};