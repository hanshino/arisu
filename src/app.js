const express = require("express");
const rateLimiter = require("./middlewares/rateLimiter");
const apiRouter = require("./routes/api");
const expressRespond = require("../lib/express-respond");

const app = express();
app.use(expressRespond);
app.use("/api/", rateLimiter, express.json(), apiRouter);

module.exports = app;
