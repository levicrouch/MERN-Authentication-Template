const router = require("express").Router();

module.exports = {
    jsonTest: function(req, res) {
        res.status(200).json({
            success: true,
            message: "TestController is up and functional"
        }); 
    }
};