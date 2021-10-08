const express = require("express");
const rateLimiter = require("./middlewares/rateLimiter");
const apiRouter = require("./routes/api");
const expressRespond = require("../lib/express-respond");

if (!process.env.PROJECT_NAME) {
  require("dotenv").config();
}

const app = express();
app.use(expressRespond);
app.use("/api/", rateLimiter, express.json(), apiRouter);

module.exports = app;
