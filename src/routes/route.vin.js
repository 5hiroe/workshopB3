const router = require("express").Router();
const controllers = require("../controllers/controller.vin");

router.post("/create/:id", controllers.create);
router.get("/retrieve/:id", controllers.retrieveByCave);

module.exports = router;
