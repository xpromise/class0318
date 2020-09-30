const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	// 入口文件：指示webpack从哪个文件开始打包
	entry: "./src/main.js",
	// entry: {
	// 	xxx: "./src/main.js",
	// },
	// 输出：打包后的文件输出到哪里去
	output: {
		filename: "[name].[hash:8].js",
		path: resolve(__dirname, "build"),
	},
	module: {
		rules: [
			// 配置loader：帮助webpack解析不能识别的模板
			{
				test: /\.css$/,
				// include: resolve(__dirname, 'src'),
				// exclude: /node_modules/,
				use: [
					// 执行顺序：从下到上/从右到左
					"style-loader",
					"css-loader",
				],
			},
			{
				test: /\.less$/,
				use: ["style-loader", "css-loader", "less-loader"],
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
	// 生产环境默认会压缩js代码
	// mode: 'production', // process.env.NODE_ENV = 'production'
	devServer: {
		port: 9527,
		proxy: {
			"/api": {
				target: "http://localhost:5000",
				changeOrigin: true,
				pathRewrite: {
					"^/api": "",
				},
			},
		},
    compress: true, // 启动gzip压缩
    hot: true // 开启HMR功能
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json', '.vue'], // 文件扩展名
    alias: { // 路径别名
      '@':resolve(__dirname, 'src'),
      '@comps':resolve(__dirname, 'src/components'),
    }
  },
  // source-map 会生成一个 xxx.map 文件，方便调试
  // 这个文件提供了源代码和构建后代码的一一映射关系，所以构建后代码出错了，会通过这个文件
  // 找到源代码的位置，从而能提示源代码出错的位置~
  // devtool: 'source-map', // 生产环境
  devtool: 'cheap-module-source-map', // 开发环境
};
