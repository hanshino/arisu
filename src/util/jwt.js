const jwt = require("jsonwebtoken");

exports.secret = process.env.JWT_SECRET;
exports.issuer = process.env.APP_DOMAIN;

/**
 * @param {String} token
 */
exports.verify = function (token) {
  return jwt.verify(token, this.secret);
};

/**
 * @param {Object} payload
 * @param {Object} option
 */
exports.sign = function (payload, option) {
  return jwt.sign(payload, this.secret, { issuer: this.issuer, ...option });
};
