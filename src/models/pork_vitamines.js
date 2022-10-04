const Mongoose = require("mongoose");

const schema = new Mongoose.Schema(
  {
    name: { type: String, required: true },
    grammes: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = Mongoose.model("pork_vitamines", schema);
