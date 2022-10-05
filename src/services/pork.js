const porkModel = require("../models/porks");
const exceptionHelper = require("../helpers/helper.exception");

exports.porkService = class PorkService {
  static async getAllPorks() {
    const porksList = porkModel.find();
    return porksList;
  }

  static async getPorkById() {
    const pork = porkModel.findById();
    if (!pork) {
      throw new exceptionHelper.NotFound("Porc non trouvé.");
    }
    return pork;
  }

  static async createPork(fields) {
    let porkExist = porkModel.find({ identifier: fields.identifier });
    if (porkExist) {
      throw new exceptionHelper.Conflict("Porc déjà existant");
    }
    let pork = new porkModel(fields);
    pork.save();
  }
};
