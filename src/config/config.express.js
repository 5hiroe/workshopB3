const express = require("express");
const cors = require("cors");

exports.init = async (app) => {
  app.use(cors());
  app.use(express.static("public"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use("/cave", require("../routes/route.cave"));
  app.use("/champs", require("../routes/route.champs"));
  app.use("/parcelle", require("../routes/route.parcelle"));
  app.use("/user", require("../routes/route.user"));
  app.use("/vin", require("../routes/route.vin"));

  console.log("Express Initialized.");
};
