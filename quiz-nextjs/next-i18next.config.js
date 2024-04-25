
const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "vn",
    locales: ["en", "vn"],
    localePath: path.resolve("./public/locales"),
    debug: true,
  },
};
