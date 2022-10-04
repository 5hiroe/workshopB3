const express = require("express");
const config = require("./config");

async function startServer() {
  const app = express();
  await config.init(app);
  app.listen(process.env.PORT, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Server Initialized ON ${process.env.PORT}`);
    }
  });
}

startServer();
