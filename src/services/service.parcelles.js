const exceptionHelper = require("../helpers/helper.exception");
const champsModel = require("../models/champs");
const parcellesModel = require("../models/parcelles");

exports.parcellesService = class ParcellesService {
  static async createParcelle(fields) {
    let newParcelle = new parcellesModel(fields);
    newParcelle.save();
    return newParcelle;
  }

  static async findParcelles(champs_id) {
    let parcelles = await parcellesModel.find[{ champs_id: champs_id }];
    if (!parcelles) {
      throw new exceptionHelper.NotFound(
        "Aucune Parcelle assigné au champs, ou champs inexistant."
      );
    }
    return parcelles;
  }

  static async updateParcelles(id, fields) {
    let parcelle = await parcellesModel.findOneAndUpdate({ _id: id }, fields, {
      new: true,
    });
    if (!parcelle) {
      throw new exceptionHelper.NotFound("Parcelle inexistante.");
    }
    return parcelle;
  }
};
