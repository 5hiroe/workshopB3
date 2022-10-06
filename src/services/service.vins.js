const exceptionHelper = require("../helpers/helper.exception");
const vinsModel = require("../models/vins");

exports.vinsService = class VinsService {
  static async createVin(fields) {
    let newVin = new vinsModel(fields);
    newVin.save();
    return newVin;
  }

  static async retrieveByCave(cave_id) {
    let vins = await vinsModel.find({ cave_id: cave_id });
    if (!vins) {
      return exceptionHelper.NotFound("Cette cave n'a aucun vin.");
    }
    return vins;
  }
};
