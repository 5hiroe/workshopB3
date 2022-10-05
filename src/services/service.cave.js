const exceptionHelper = require("../helpers/helper.exception");
const cavesModel = require("../models/caves");

exports.caveService = class CaveService {
  static async createChamps(fields) {
    let newCave = new cavesModel(fields);
    newCave.save();
    return newCave;
  }

  static async findCaveByVin(id) {
    let cave = await cavesModel.find({ vins: id });
    if (!cave) {
      throw new exceptionHelper.NotFound("Aucune Cave ne contient ce vin.");
    }
    return cave;
  }

  static async findCaves(user_id) {
    let caves = await cavesModel.find({ user_id: user_id });
    if (!caves) {
      throw new exceptionHelper.NotFound("Vous n'avez aucune cave.");
    }
    return caves;
  }

  static async updateCaves(id, fields) {
    let cave = await cavesModel.findOneAndUpdate({ _id: id }, fields, {
      new: true,
    });
    if (!cave) {
      throw new exceptionHelper.NotFound("Cave inexistante.");
    }
    return cave;
  }
};
