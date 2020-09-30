const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/*
	code spilt 代码分割
		1. 作用：
			默认情况下 webpack会把所有js文件打包成一个js文件，体积太大了，不能按需加载
			所以需要代码分割，就是将大js文件差分成一个个小js文件，这样加载速度快，同时按需加载
		2. 配置
			- 多入口: 有多少个入口，就会输出多少个js文件
			- optimization
*/

module.exports = {
	// 多入口
	entry: {
		main: "./src/main.js",
		home: "./src/home.js",
	},
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
	optimization: {
		/*
			1. 如果是node_modules中的文件（第三方模块），如果被多入口引用了两次以上，并且包超过20kb，就会被提取成单独文件
				vendor
			2. 如果是自己写的文件（自定义模块），如果被多入口引用了两次以上，并且包超过20kb，就会被提取成单独文件
				default
		*/
		splitChunks: {
			chunks: "all",
			// minSize: 1,
			// minSize: 20000, 最小提取文件大小
      // minRemainingSize: 0,
      // maxSize: 0, 最大提取文件大小
      // minChunks: 1, 最少被引用一次 
      // maxAsyncRequests: 30, 最大异步请求的数量
      // maxInitialRequests: 30, 入口文件最大异步请求的数量
      // automaticNameDelimiter: '~', 命名的连接符
      // enforceSizeThreshold: 50000,
      // cacheGroups: {
      //   vendors: { // 这个组对node_modules生效
      //     test: /[\\/]node_modules[\\/]/,
      //     priority: -10 // 优先级
      //   },
      //   default: { // 这个组对所有生效
      //     minChunks: 2, 最少被引用2次 
      //     priority: -20,
      //     reuseExistingChunk: true
      //   }
      // }
		},
	},
};
