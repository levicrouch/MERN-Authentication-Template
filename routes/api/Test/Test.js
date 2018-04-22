const router = require("express").Router();
const TestController = require("../../../controllers/TestController/TestController");

router.route("/")
    .get(TestController.jsonTest);

module.exports = router;