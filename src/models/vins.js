const Mongoose = require("mongoose");

const schema = new Mongoose.Schema(
  {
    numero: { type: String, required: true },
    date: { type: Date, required: true },
    champs_id: { type: Mongoose.Schema.Types.ObjectId, required: true },
    type: { type: String, enum: ["Rouge", "Blanc", "Rosé"], required: true },
    emplacement: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = Mongoose.model("Vins", schema);
