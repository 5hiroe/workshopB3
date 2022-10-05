exports.BadRequest = class BadRequest extends Error {
  constructor(message = "Champs manquants.") {
    super(message);
    this.name = this.constructor.name;
    this.status = 400;
  }
};

exports.Forbidden = class Forbidden extends Error {
  constructor(message = "Accès restreint.") {
    super(message);
    this.name = this.constructor.name;
    this.status = 403;
  }
};

exports.Unauthorized = class Unauthorized extends Error {
  constructor(message = "Accès non autorisé.") {
    super(message);
    this.name = this.constructor.name;
    this.status = 401;
  }
};

exports.Conflict = class Conflict extends Error {
  constructor(message = "Ressource déjà existente.") {
    super(message);
    this.name = this.constructor.name;
    this.status = 409;
  }
};

exports.NotFound = class NotFound extends Error {
  constructor(message = "Ressource non trouvée.") {
    super(message);
    this.name = this.constructor.name;
    this.status = 404;
  }
};

exports.PreConditionFailed = class PreConditionFailed extends Error {
  constructor(message = "Précondition échouée.") {
    super(message);
    this.name = this.constructor.name;
    this.status = 412;
  }
};

exports.VersionNotSupported = class VersionNotSupported extends Error {
  constructor(message = "Version non supportée.") {
    super(message);
    this.name = this.constructor.name;
    this.status = 505;
  }
};

exports.handle = function (error, response) {
  if (error.status)
    return response.status(error.status).json({ error: error.message });
  else return response.status(400).json({ error: error.message });
};
