const { caveService } = require("../services/service.cave");
const exceptionHelper = require("../helpers/helper.exception");
const cavesModel = require("../models/caves");
const { default: mongoose } = require("mongoose");

exports.create = async function (req, res) {
  try {
    const id = req.params;
    const fields = req.body;
    fields.user_id = mongoose.Types.ObjectId(id);
    let cave = await caveService.createCave(fields);
    return res.status(200).json({ message: "Cave créée.", cave: cave });
  } catch (e) {
    return exceptionHelper.handle(e, res);
  }
};

exports.modify = async function (req, res) {
  try {
    const id = req.params;
    const fields = req.body;
    const newCave = await caveService.updateCaves(id, fields);
    return res
      .status(200)
      .json({ message: "Cave mise à jour.", cave: newCave });
  } catch (e) {
    return exceptionHelper.handle(e, res);
  }
};

exports.findCaves = async function (req, res) {
  try {
    const id = req.params;
    const caves = await caveService.findCaves(id);
    return res.status(200).json({ message: "Caves récupérées.", caves: caves });
  } catch (e) {
    return exceptionHelper.handle(e, res);
  }
};

exports.retrieve = async function (req, res) {
  try {
    const id = req.params;
    const cave = await caveService.retrieve(id);
    return res.status(200).json({ message: "Cave récupérée.", cave: cave });
  } catch (e) {
    return exceptionHelper.handle(e, res);
  }
};
