const jwt = require("../util/jwt");
const { __ } = require("../util/i18n");

exports.jwtAuth = (req, res, next) => {
  let authenticate = req.get("Authorization");
  if (!authenticate) {
    return res.status(403).json({ message: __("http.code.403") });
  }

  let token = retrieveToken(authenticate);
  try {
    let decoded = jwt.verify(token);
    req.token = decoded;
    return next();
  } catch (err) {
    switch (err.name) {
      case "TokenExpiredError":
      case "JsonWebTokenError":
      case "NotBeforeError":
        return res.status(403).json({ type: err.name, message: __("http.code.403") });
      default:
        // unknown error, keep throwing
        throw err;
    }
  }
};

/**
 * 取出`token`字串
 * @param {String} authenticate
 * @returns {String}
 */
function retrieveToken(authenticate) {
  return authenticate.replace(/bearer/i, "").trim();
}
