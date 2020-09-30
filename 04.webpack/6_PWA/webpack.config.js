const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");

/*
	PWA 渐进式网络应用程序
			离线可访问应用程序
*/

module.exports = {
	// 入口文件：指示webpack从哪个文件开始打包
	entry: "./src/main.js",
	// 输出：打包后的文件输出到哪里去
	output: {
		filename: "[name].[hash:8].js",
		path: resolve(__dirname, "build"),
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: /node_modules/,
				options: {
					presets: ["@babel/preset-env"],
				},
			},
		],
	},
	// 插件：功能更加强大
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
		}),
		new WorkboxPlugin.GenerateSW({
			// 这些选项帮助快速启用 ServiceWorkers
			// 不允许遗留任何“旧的” ServiceWorkers
			clientsClaim: true,
			skipWaiting: true,
		}),
	],
	mode: "development",
	devServer: {
		port: 9527,
		compress: true, // 启动gzip压缩
		hot: true, // 开启HMR功能
	},
};
