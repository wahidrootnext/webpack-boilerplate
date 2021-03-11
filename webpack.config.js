const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	mode: 'development',
	entry: __dirname + '/src/index.js',
	output: {
		filename: "js/scripts.bundle.js",
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /favicon\.(png|jpe?g|gif|ico)$/i,
				exclude: /(node_modules)/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
						},
					},
				],
			},
			{
				test: /\.(s?css)$/,
				exclude: /(node_modules)/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: "../",
						},
					},
					"css-loader",
					"sass-loader"
				],
			},
			{
				test: /\.(ttf|eot|woff|woff2|svg)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'fonts/'
					},
				},
			},
			{
				test: /\.(js)$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
		],
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery"
		}),
		new MiniCssExtractPlugin({
			filename: 'css/styles.bundle.css'
		})
	],
}