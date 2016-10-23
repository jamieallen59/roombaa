import HtmlWebpackPlugin from 'html-webpack-plugin'

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	title: 'Roomba Challenge',
    hash: true,
    template: './index.html',
    filename: 'index.html',
    inject: 'body'
})

export default {
	entry: './src/index.js',
	output: {
		path: './dist'
	},
	module: {
		loaders: [ {
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel'
		} ]
	},
	plugins: [
		HtmlWebpackPluginConfig
	]
}
