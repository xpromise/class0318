const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/*
	tree shaking 树摇
		1. 作用：去除无用的js代码
		2. 配置：
			- mode: "production", --> terserPlugin 会压缩js代码并去除无用js代码
			- 源码中使用es6模块化
*/

module.exports = {
	// 入口文件：指示webpack从哪个文件开始打包
	entry: "./src/main.js",
	// 输出：打包后的文件输出到哪里去
	output: {
		filename: "[name].js",
		path: resolve(__dirname, "build"),
	},
	// 插件：功能更加强大
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
		}),
	],
	mode: "production",
};
