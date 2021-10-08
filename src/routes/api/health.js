const {
  HealthcheckerSimpleCheck,
} = require("nodejs-health-checker/dist/healthchecker/healthchecker");
const router = require("express").Router();

router.get("/health-check", (_, res) => res.send(HealthcheckerSimpleCheck()));

module.exports = router;
