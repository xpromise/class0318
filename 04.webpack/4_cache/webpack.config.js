const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/**
	缓存 cache
		问题：资源被强制缓存起来了，服务器更新了资源，由于强制缓存的原因，客户端不会重新请求资源，导致资源不能及时更新
		解决：
			1. hash webpakc打包会生成一个hash，所有资源都共享这个值
				优点：一旦文件发生变化，重新打包会生成新的文件名，就会让强制缓存失效，从而加载新资源
				缺点：其中一个文件变化了，所有文件都一起变化，其他文件缓存就失效
			2. chunkhash 根据是否是同一个chunk来生成hash值
				问题：css由于css-loader会打包到js中，导致css和js同属于一个chunk
				共享一个hash值。css文件变化，js文件也会变化
			3. contenthash 会根据文件内容来生成hash值（只有文件内容发生了变化，才会变化）
				问题：改动某个js文件（contenthash会变化），依赖这个js文件也会发生变化
			4. 提取所有文件的hash成单独文件
				optimization: {
					runtimeChunk: {
						name: entrypoint => `runtime~${entrypoint.name}`
					}
				}
 */

module.exports = {
	// 入口文件：指示webpack从哪个文件开始打包
	entry: "./src/main.js",
	// entry: {
	// 	xxx: "./src/main.js",
	// },
	// 输出：打包后的文件输出到哪里去
	output: {
		filename: "[name].[contenthash:8].js",
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
		new MiniCssExtractPlugin({
			filename: "[name].[contenthash:8].css",
		}),
	],
	mode: "development", // process.env.NODE_ENV = 'development'
	optimization: {
		runtimeChunk: {
			name: entrypoint => `runtime~${entrypoint.name}`
		}
	}
};
