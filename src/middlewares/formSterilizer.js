const { validationResult } = require("express-validator");
const { __ } = require("../util/i18n");

/**
 * 透過`validator`過濾的結果，統一回應格式不符合
 */
module.exports = (req, res, next) => {
  let result = validationResult(req);
  const isPass = result.isEmpty();
  if (isPass) return next();
  const { errors } = result;
  // 進入錯誤處理環節
  res.status(400).json({ message: __("http.code.400"), items: errors });
};
