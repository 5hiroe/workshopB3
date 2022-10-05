const ajvInstance = require("./validators/ajv-instance");

exports.create = ajvInstance.compile({
  type: "object",
  additionalProperties: false,
  properties: {
    numero: { type: "string", maxLength: 150 },
    annee: { type: "number", maxLength: 150 },
    type: { enum: ["Rouge", "Blanc", "Rosé"] },
    emplacement: { type: "string", maxLength: 150 },
  },
});
