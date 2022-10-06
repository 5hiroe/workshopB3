const router = require("express").Router();
const controllers = require("../controllers/controller.parcelle");

router.post("/create/:id", controllers.create);
router.get("/find/:id", controllers.findParcelles);
router.get("/retrieve/:id", controllers.retrieve);
router.put("/update/:id", controllers.update);

module.exports = router;
