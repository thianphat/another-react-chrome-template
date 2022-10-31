const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

//std dev build: npm start

module.exports = merge(common, {
  mode: "development",
  devtool: "cheap-module-source-map",
});
