const Mongoose = require("mongoose");

const schema = new Mongoose.Schema(
  {
    user_id: {
      type: Mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    type: { type: String, enum: ["Vigne", "Blé"], required: true },
    location: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = Mongoose.model("Champs", schema);
