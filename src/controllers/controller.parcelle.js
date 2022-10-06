const exceptionHelper = require("../helpers/helper.exception");
const { parcellesService } = require("../services/service.parcelles");
const mongoose = require("mongoose");

exports.create = async function (req, res) {
  try {
    const fields = req.body;
    const id = req.params;

    fields.champs_id = mongoose.Types.ObjectId(id);
    const newParcelle = await parcellesService.createParcelle(fields);
    return res
      .status(200)
      .json({ message: "Parcelle créée.", parcelle: newParcelle });
  } catch (e) {
    return exceptionHelper.handle(e, res);
  }
};

exports.findParcelles = async function (req, res) {
  try {
    const id = req.params;
    const parcelles = await parcellesService.findParcelles(id);
    return res
      .status(200)
      .json({ message: "Parcelles récupérées.", parcelles: parcelles });
  } catch (e) {
    return exceptionHelper.handle(e, res);
  }
};

exports.retrieve = async function (req, res) {
  try {
    const id = req.params;
    const parcelle = await parcellesService.retrieveParcelle(id);
    return res
      .status(200)
      .json({ message: "Parcelle récupérée.", parcelle: parcelle });
  } catch (e) {
    return exceptionHelper.handle(e, res);
  }
};

exports.update = async function (req, res) {
  try {
    const fields = req.body;
    const id = req.params;
    const newParcelle = await parcellesService.updateParcelles(id, fields);
    return res
      .status(200)
      .json({ message: "Parcelle mise à jour", parcelle: parcelle });
  } catch (e) {
    return exceptionHelper.handle(e, res);
  }
};
