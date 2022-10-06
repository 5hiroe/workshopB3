const router = require("express").Router();
const controllers = require("../controllers/controller.champs");

router.post("/create/:id", controllers.create);
router.get("/retrieve/:id", controllers.retrieve);

module.exports = router;
