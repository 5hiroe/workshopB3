const Mongoose = require("mongoose");

const schema = new Mongoose.Schema(
  {
    champs_id: {
      type: Mongoose.Schema.Types.ObjectId,
      ref: "Champs",
      required: true,
    },
    exposition: {
      type: String,
      enum: [
        "N",
        "S",
        "E",
        "O",
        "NNE",
        "NE",
        "ENE",
        "ESE",
        "SE",
        "SSE",
        "SSO",
        "SO",
        "OSO",
        "ONO",
        "NO",
        "NNO",
      ],
    },
    temperature: { type: Number, required: false },
    humidite: { type: String, required: false },
    ensoleillement: { type: String, required: false },
    placement: {
      latitude: { type: String, required: true },
      longitude: { type: String, required: true },
    },
  },
  { timestamps: true }
);

module.exports = Mongoose.model("Parcelle", schema);
