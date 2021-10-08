const router = require("express").Router();
const fs = require("fs");
const path = require("path");
const apiPath = path.resolve(process.cwd(), "src", "routes", "api");

// register
fs.readdirSync(apiPath).forEach(file => {
  let isJSFile = path.extname(file) === ".js";
  let isTestFile = file.indexOf("test.js") !== -1;
  let isSelf = file === "index.js";

  if (isTestFile) return;
  if (!isJSFile) return;
  if (isSelf) return;

  router.use(require(path.join(apiPath, file)));
});

module.exports = router;
