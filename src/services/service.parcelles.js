const exceptionHelper = require("../helpers/helper.exception");
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
      throw new exceptionHelper.NotFound("Aucune parcelle assignée au champs.");
    }
    return parcelles;
  }

  static async retrieveParcelle(id) {
    let parcelle = await parcellesModel.findById(id);
    if (!parcelle) {
      throw new exceptionHelper.NotFound("Parcelle non existente.");
    }
    return parcelle;
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
