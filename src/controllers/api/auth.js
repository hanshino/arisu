const jwt = require("../../util/jwt");
const { __ } = require("../../util/i18n");

exports.login = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: __("http.code.400") });
  }

  let token = jwt.sign({ name }, { expiresIn: "90 days" });

  res.json({ token });
};
