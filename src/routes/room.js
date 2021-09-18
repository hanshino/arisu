const Router = require("express").Router;
const router = Router();

router.get("/test", (req, res) => {
  res.json({ message: "success" });
});

module.exports = router;
