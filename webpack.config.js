const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	title: 'Roomba Challenge',
	hash: true,
	template: './index.html',
	filename: 'index.html',
	inject: 'body'
})

module.exports = {
	entry: './src/index.js',
	output: {
		path: './dist',
		filename: 'index.js'
	},
	devtool: 'inline-source-map',
	devServer: {
		stats: {
			chunks: false
		}
	},
	module: {
		preLoaders: [ {
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'eslint-loader'
		} ],
		loaders: [ {
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		} ]
	},
	resolveLoader: {
		root: path.join(__dirname, 'node_modules')
	},
	plugins: [
		HtmlWebpackPluginConfig
	]
}
