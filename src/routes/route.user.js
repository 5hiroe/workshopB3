const router = require("express").Router();
const controllers = require("../controllers/controller.user");

router.post("/create", controllers.create);

module.exports = router;
