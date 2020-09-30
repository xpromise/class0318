const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	// 入口文件：指示webpack从哪个文件开始打包
	entry: "./src/main.js",
	// entry: {
	// 	xxx: "./src/main.js",
	// },
	// 输出：打包后的文件输出到哪里去
	output: {
		filename: "[name].js",
		path: resolve(__dirname, "build"),
	},
	module: {
		rules: [
			// 配置loader：帮助webpack解析不能识别的模板
			{
				test: /\.css$/,
				use: [
					// 执行顺序：从下到上/从右到左
					MiniCssExtractPlugin.loader, // 提取js中css成单独文件
					// "style-loader", // 创建style标签，插入js中的css
					"css-loader", // 将css打包到js中
				],
			},
		],
	},
	// 插件：功能更加强大
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
		}),
		new MiniCssExtractPlugin(),
	],
	mode: "development", // process.env.NODE_ENV = 'development'
};
