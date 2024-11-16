const path = require("path");

const express = require("express");
const rootDir = require("../util/path-util");

const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-home.html"));
});
const registerdHomes = [];

hostRouter.post("/add-home", (req, res, next) => {
  registerdHomes.push({ ...req.body });
  console.log(registerdHomes);
  res.sendFile(path.join(rootDir, "views", "home-added.html"));
});


module.exports = hostRouter;
