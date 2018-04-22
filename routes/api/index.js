const router = require("express").Router();
const TestRoutes = require("./Test/Test");
const UserRoutes = require("./User/User");


// test routes
router.use("/test", TestRoutes);
// user routes
router.use("/user", UserRoutes);

module.exports = router;
