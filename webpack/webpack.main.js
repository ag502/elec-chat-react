const { merge } = require("webpack-merge");
const path = require("path");

const commonConfig = require("./webpack.common");

module.exports = merge(commonConfig, {
	entry: path.join(__dirname, "../main.ts"),
	output: {
		filename: "index.js",
		path: path.join(__dirname, "../build/js/main"),
	},
	target: "electron-main",
});
