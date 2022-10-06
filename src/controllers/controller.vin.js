const { default: mongoose } = require("mongoose");
const exceptionHelper = require("../helpers/helper.exception");
const vinsModel = require("../models/vins");
const { vinsService } = require("../services/service.vins");

exports.create = async function (req, res) {
  try {
    const id = req.params;
    const fields = req.body;
    fields.champs_id = mongoose.Types.ObjectId(id);
    const vin = await vinsService.createVin(fields);
    return res.status(200).json({ message: "Vin créé.", vin: vin });
  } catch (e) {
    return exceptionHelper.handle(e, res);
  }
};

exports.retrieveByCave = async function (req, res) {
  try {
    const id = req.params;
    let vins = await vinsService.retrieveByCave(id);
    return res.status(200).json({ message: "Vins récupérés", vins: vins });
  } catch (e) {
    return exceptionHelper.handle(e, res);
  }
};
