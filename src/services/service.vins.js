const exceptionHelper = require("../helpers/helper.exception");
const vinsModel = require("../models/vins");

exports.vinsService = class VinsService {
  static async createVin(fields) {
    let newVin = new vinsModel(fields);
    newVin.save();
    return newVin;
  }
};
