const exceptionHelper = require("../helpers/helper.exception");
const { userService } = require("../services/service.users");

exports.create = async function (req, res) {
  try {
    const fields = req.body;
    const newUser = await userService.createUser(fields);
    return res
      .status(200)
      .json({ message: "Utilisateur créé.", user: newUser });
  } catch (e) {
    return exceptionHelper.handle(e, res);
  }
};
