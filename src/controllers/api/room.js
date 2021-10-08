const roomService = require("../../services/room");

exports.store = async (req, res) => {
  const { body, token } = req;

  try {
    let result = await roomService.create({
      ...body,
      creator: token.name,
      created_at: new Date().getTime(),
    });

    return res.CREATED(result);
  } catch (err) {
    return res.INTERNAL_SERVER_ERROR(err);
  }
};

exports.index = async (req, res) => {
  try {
    let result = await roomService.all();
    return res.OK(result);
  } catch (err) {
    console.log(err);
    return res.INTERNAL_SERVER_ERROR(err);
  }
};
