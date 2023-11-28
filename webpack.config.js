const TerserPlugin = require("terser-webpack-plugin");
const { merge } = require('webpack-merge');
const path = require('path');
const DotenvWebpack = require("dotenv-webpack")


module.exports = ()=> {

	return {
		mode:'production',
		entry: {
			index:{
				import:'./src/demo.js',
			},
		},
		output: {
			path: path.resolve(__dirname, 'dist/build'),
			filename: 'demo.js',
		},
		optimization: {
			minimize: true,
			minimizer: [new TerserPlugin()],
		},
		resolve: {
			fallback: {
				path: require.resolve("path-browserify"),
				fs: false,
				os:false,
				crypto:false,
			}
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /(node_modules)/,
					loader: 'babel-loader'
				},
			]
		},
		plugins: [
			new DotenvWebpack(),
		],
		devServer: {
			static: {
				directory: path.join(__dirname, 'public'),
			},
			compress: true,
			port: 9101,
		},
		performance: {
			hints: false,
			maxEntrypointSize: 512000,
			maxAssetSize: 512000
		}
	}

};
