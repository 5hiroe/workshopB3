const dotenv = require("dotenv");
const mongo = require("./config.mongoose");
const express = require("./config.express");

exports.init = async (app) => {
  dotenv.config();
  mongo.init();
  express.init(app);
};
