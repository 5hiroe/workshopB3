const Mongoose = require("mongoose");
const antibiotics = require("./antibiotics");
const porkVitamines = require("./pork_vitamines");

const schema = new Mongoose.Schema(
  {
    identifier: { type: String, required: true },
    weight: { type: String, required: true },
    vitamines: [{ type: porkVitamines, required: false }],
    antibiotics: [{ type: antibiotics, required: true }],
  },
  { timestamps: true }
);

module.exports = Mongoose.model("porks", schema);
