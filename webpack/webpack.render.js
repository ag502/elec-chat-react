const { merge } = require("webpack-merge");
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const commonConfig = require("./webpack.common");

module.exports = merge(commonConfig, {
	entry: path.join(__dirname, "../src/js/index.ts"),
	output: {
		filename: "index.js",
		path: path.join(__dirname, "../build/js/render"),
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [["@babel/preset-env"], ["@babel/preset-react"]],
					},
				},
				exclude: /node_modules/,
			},
			{
				test: [/\.s[ac]ss$/i, /\.css$/i],
				use: ["style-loader", "css-loader", "sass-loader"],
			},
		],
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: path.resolve(__dirname, "../index.html"),
		}),
	],
	devServer: {
		historyApiFallback: true,
		port: 4000,
		compress: true,
	},
});
