const path = require('path'); // Add this line

const express = require('express');
const rootDir = require('../util/path-util');

const storeRouter = express.Router();

storeRouter.get("/", (req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "index1.html"));
});

module.exports = storeRouter;
