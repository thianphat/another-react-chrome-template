const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

// to minify the code for production: npm run build

module.exports = merge(common, {
  mode: "production",
});
