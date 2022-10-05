const router = require("express").Router();
const controllers = require("../controllers/controller.cave");
const validators = require("../validators/validator.vin");

router.post("/create", validators.create, controllers.create);

module.exports = router;
