const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/*
	HMR hot module replacement 热模块替换
		1. 作用：更新某个模块时，只有这个模块会重新加载，其他模块不变
		2. 对于css。style-loader已经做好了
		3. 对于js，就需要自己写代码控制：
			// 开启HMR
			if (module.hot) {
				module.hot.accept("./add", function () {});
			}

			react --> react-hot-loader
			vue --> vue-loader
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
				use: [
					"style-loader",
					"css-loader",
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
	mode: "development", // process.env.NODE_ENV = 'development'
	devServer: {
		port: 9527,
    compress: true, // 启动gzip压缩
    hot: true // 开启HMR功能
  }
};
