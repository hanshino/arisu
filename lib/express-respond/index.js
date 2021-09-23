const { StatusCodes } = require("http-status-codes");
const { __ } = require("../../src/util/i18n");

/**
 * 自己擴充的`express`回覆功能
 */
module.exports = (req, res, next) => {
  let codes = Object.keys(StatusCodes);

  codes.forEach(
    code =>
      (res[code] = body =>
        res
          .status(StatusCodes[code])
          .json({ message: __(`http.code.${StatusCodes[code]}`), items: body }))
  );

  next();
};
