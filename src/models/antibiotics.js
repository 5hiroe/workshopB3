const Mongoose = require("mongoose");

const schema = new Mongoose.Schema(
  {
    name: { type: String, required: true },
    grammes: { type: String, required: true },
    max_uses: { type: String, required: false },
  },
  { timestamps: true }
);

module.exports = Mongoose.model("antibiotics", schema);
