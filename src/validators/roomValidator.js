const { checkSchema } = require("express-validator");
const { __ } = require("../util/i18n");

module.exports = checkSchema({
  number: {
    exists: true,
    isString: true,
    errorMessage: __("http.message.invalid", { field: __("field.multiboss.number") }),
    custom: { options: value => /^\d{6}$/.test(`${value}`) },
    customSanitizer: { options: value => `${value}` },
  },
  level: {
    exists: true,
    isNumeric: true,
    errorMessage: __("http.message.invalid", { field: __("field.multiboss.level") }),
    toInt: true,
  },
  boss: {
    exists: true,
    isString: true,
  },
});
