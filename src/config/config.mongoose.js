require("dotenv").config();
const mongoose = require("mongoose");

exports.init = async () =>
  await mongoose.connect(
    process.env.DB_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (error) => {
      if (error) console.log("DB connection error: " + error);
      else console.log("DB Initialized.");
    }
  );
