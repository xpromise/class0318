const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/*
	多进程打包
		开启多个进行同时干一件事，速度更快
		注意：每一个进程开启都有800ms左右，进程通信也有时间
			所以：一般只对耗时长的任务处理 --> babel-loader
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
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					"thread-loader",
					{
						loader: "babel-loader",
						options: {
							presets: ["@babel/preset-env"],
						},
					},
				],
			},
		],
	},
	// 插件：功能更加强大
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
		}),
	],
	mode: "development",
	devServer: {
		port: 9527,
		compress: true, // 启动gzip压缩
		hot: true, // 开启HMR功能
	},
};
