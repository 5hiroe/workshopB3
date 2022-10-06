const exceptionHelper = require("../helpers/helper.exception");
const userModel = require("../models/user");

exports.userService = class UserService {
  static async createUser(fields) {
    let userExist = await userModel.findOne({ email: fields.email });
    if (userExist) {
      throw new exceptionHelper.Conflict("Utilisateur déjà existant");
    }
    let newUser = new userModel(fields);
    newUser.save();
    return newUser;
  }
};
