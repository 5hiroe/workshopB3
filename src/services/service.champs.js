const exceptionHelper = require("../helpers/helper.exception");
const userModel = require("../models/user");
const champsModel = require("../models/champs");

exports.champsService = class ChampsService {
  static async createChamps(fields) {
    let newChamps = new champsModel(fields);
    newChamps.save();
    return newChamps;
  }
};
