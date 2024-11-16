const path = require("path");




const express = require("express");
const fs = require("fs"); // added fs module
const rootDir = require("./util/path-util");

//Local Module
const hostRouter = require("./routers/hostRouter");
const storeRouter = require("./routers/storeRouter");


const app = express();
app.use(express.static(path.join( rootDir, "public")));

// Middleware to parse URL-encoded bodies

app.use(express.urlencoded({ extended: true }));

app.use(storeRouter);
app.use("/host", hostRouter);

app.use((req, res, next) => {
  console.log("Request received", req.url, req.method, req.body);
  next();
});

app.use((req, res, next) => {
  res.status(404).send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <title>Page Not Found</title>
      </head>
      <body>
          <h1>404 Page Not Found</h1>
      </body>
      </html>
    `);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});
