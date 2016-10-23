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
	}
}
