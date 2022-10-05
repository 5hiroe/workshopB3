const Mongoose = require("mongoose");

const schema = new Mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    mail: { type: String, required: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    types: [
      {
        type: String,
        required: true,
        enum: ["Vigne", "Bovin", "Porcin", "Blé"],
      },
    ],
  },
  { timestamps: true }
);

module.exports = Mongoose.model("User", schema);
