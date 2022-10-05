const Mongoose = require("mongoose");

const schema = new Mongoose.Schema(
  {
    user_id: { type: Mongoose.Schema.Types.ObjectId, required: true },
    temperature: { type: Number, required: false },
    obscurite: { type: Number, required: false },
    vins: [{ type: Mongoose.Schema.Types.ObjectId, required: false }],
    vibrations: { type: Number, required: false },
  },
  { timestamps: true }
);

module.exports = Mongoose.model("Caves", schema);
