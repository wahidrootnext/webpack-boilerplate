const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
	mode: 'development',
	entry: [
		__dirname + '/src/js/scripts.js',
		__dirname + '/src/scss/style.scss'
	],
	output: {
		filename: "js/scripts.bundle.js",
		path: path.resolve(__dirname, 'public')
	},
	module: {
		rules: [
			{
				test: /\.scss$/i,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: path.resolve(__dirname, 'public')
						}
					},
					"css-loader",
					"sass-loader"
				],
			},
			{
				test: /\*.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "css/style.bundle.css"
		})
	],
}