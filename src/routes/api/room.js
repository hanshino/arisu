const router = require("express").Router();
const roomValidator = require("../../validators/roomValidator");
const formSterilizer = require("../../middlewares/formSterilizer");

router
  .route("/room")
  .get(function (req, res) {
    res.json({ message: "room list" });
  })
  .post(roomValidator, formSterilizer, function (req, res) {
    res.CREATED({ message: "room create" });
  });

module.exports = router;
