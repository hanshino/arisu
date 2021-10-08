const express = require("express");
const rateLimiter = require("./middlewares/rateLimiter");
const apiRouter = require("./routes/api");
const expressRespond = require("../lib/express-respond");
const path = require("path");
if (!process.env.PROJECT_NAME) {
  require("dotenv").config({ path: path.join(process.cwd(), ".env") });
}

const app = express();
app.use(expressRespond);
app.use("/api/", rateLimiter, express.json(), apiRouter);

module.exports = app;
