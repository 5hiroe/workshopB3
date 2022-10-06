const exceptionHelper = require("../helpers/helper.exception");
const userModel = require("../models/user");
const champsModel = require("../models/champs");

exports.champsService = class ChampsService {
  static async createChamps(fields) {
    let newChamps = new champsModel(fields);
    newChamps.save();
    return newChamps;
  }

  static async retrieveChamps(id) {
    let champs = await champsModel.find({ user_id: id });
    if (!champs) {
      throw new exceptionHelper.NotFound("Vous n'avez aucun champs.");
    }
    return champs;
  }
};
