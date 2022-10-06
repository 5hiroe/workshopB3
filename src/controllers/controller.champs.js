const { champsService } = require("../services/service.champs");
const champsModel = require("../models/champs");
const exceptionHelper = require("../helpers/helper.exception");
const mongoose = require("mongoose");

exports.create = async function (req, res) {
  try {
    const id = req.params;
    let fields = req.body;
    fields.user_id = mongoose.Types.ObjectId(id);
    const champs = await champsService.createChamps(fields);
    return res.status(200).json({ message: "Champs créé.", champs: champs });
  } catch (e) {
    return exceptionHelper.handle(e, res);
  }
};

exports.retrieve = async function (req, res) {
  try {
    const id = req.params;
    const champs = await champsService.retrieveChamps(id);
    return res
      .status(200)
      .json({ message: "Champs récupérés.", champs: champs });
  } catch (e) {
    return exceptionHelper.handle(e, res);
  }
};
