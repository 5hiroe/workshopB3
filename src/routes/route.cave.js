const router = require("express").Router();
const controllers = require("../controllers/controller.cave");

router.post("/create/:id", controllers.create);
router.put("/modify/:id", controllers.modify);
router.get("/find/:id", controllers.findCaves);
router.get("/retrieve/:id", controllers.retrieve);
module.exports = router;
