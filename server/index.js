const express = require("express");
const path = require("path");
const apiRoutes = require("./routes");
const webServer = express();

webServer
  .use(express.static(path.join(__dirname, "../dist")))
  .use("/Api", apiRoutes)
  .use((req, res, next) => {
    const err = new Error("not found")
    err.status = 404;
    next(err)
  })
  .use((err, req, res, next) => res.json(err))

module.exports = webServer;