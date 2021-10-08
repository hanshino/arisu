const router = require("express").Router();
const { jwtAuth } = require("../../middlewares/authenticate");
const authController = require("../../controllers/api/auth");

router.post("/auth/login", authController.login);

router.get("/auth/me", jwtAuth, (req, res) => {
  res.json(req.token);
});

module.exports = router;
