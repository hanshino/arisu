const router = require("express").Router();
const roomValidator = require("../../validators/roomValidator");
const formSterilizer = require("../../middlewares/formSterilizer");
const { jwtAuth } = require("../../middlewares/authenticate");
const roomController = require("../../controllers/api/room");

/** 房間的相關`apiResource` */
router
  .route("/room")
  .get(roomController.index)
  .post(jwtAuth, roomValidator, formSterilizer, roomController.store);

module.exports = router;
