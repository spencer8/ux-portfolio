var webpack = require('webpack');
var path = require('path');
var glob = require('glob');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	context: path.resolve(__dirname),
	entry: {
		home: './src/views/home/home.js',
		plusFive: './src/views/port-page/port-page.js',
		smc: './src/views/port-page/port-page.js',
		egan: './src/views/port-page/port-page.js',
		uxReviews: './src/views/port-page/port-page.js',
		childrenIncorporated: './src/views/port-page/port-page.js',
		plugin: './src/views/port-page/port-page.js',
		cms: './src/views/port-page/port-page.js',
		custom: './src/views/port-page/port-page.js',
		resurgent: './src/views/port-page/port-page.js'
	},
	output: {
		path: path.resolve(__dirname, 'docs'),
		filename: 'js/[name].js'
	},
	module: {
		loaders: [
			{
				test: /\.handlebars$/,
				loader: 'handlebars-loader',
				query: {
					partialDirs: [path.resolve(__dirname, 'src', 'components')].concat(glob.sync('**/', { cwd: path.resolve(__dirname, 'src', 'components'), realpath: true }))
				}
			},
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.(scss|css)$/,
				loader: ExtractTextPlugin.extract(
					'style',
					'css!sass'
				)
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'file-loader'
			}
		]
	},
	sassLoader: {
		includePaths: [
			'./src/styles',
			'./src/views/**/*.scss',
			'./src/components/**/*.scss'
		]
	},
	plugins: [
		new ExtractTextPlugin('css/[name].css'),
		new CleanWebpackPlugin(['docs'], { verbose: true }),
		new CopyWebpackPlugin([{ from: './src/static' }]),
		new HtmlWebpackPlugin({
			title: 'Home',
			filename: 'index.html',
			template: './src/views/home/home.handlebars',
			chunks: ['home'],
			hbsContext:require('./src/views/home/home.json') 
		}),
		new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
		new HtmlWebpackPlugin({
			title: '+Five short film player',
			filename: 'plus-five/index.html',
			template: './src/views/port-page/port-page.handlebars',
			chunks: ['plusFive'],
			hbsContext: require('./src/views/port-page/plus-five.json')
		}),
		new HtmlWebpackPlugin({
			title: 'Streaming App for Samsung TV',
			filename: 'smc/index.html',
			template: './src/views/port-page/port-page.handlebars',
			chunks: ['smc'],
			hbsContext: require('./src/views/port-page/smc.json')
		}),
		new HtmlWebpackPlugin({
			title: 'Jennifer Egan: Experimental, Immersive Experience',
			filename: 'egan/index.html',
			template: './src/views/port-page/port-page.handlebars',
			chunks: ['egan'],
			hbsContext: require('./src/views/port-page/egan.json')
		}),
		new HtmlWebpackPlugin({
			title: 'UX Reviews',
			filename: 'ux-reviews/index.html',
			template: './src/views/port-page/port-page.handlebars',
			chunks: ['uxReviews'],
			hbsContext: require('./src/views/port-page/ux-reviews.json')
		}),
		new HtmlWebpackPlugin({
			title: 'Donor MGMT System Redesign',
			filename: 'children-incorporated/index.html',
			template: './src/views/port-page/port-page.handlebars',
			chunks: ['childrenIncorporated'],
			hbsContext: require('./src/views/port-page/children-incorporated.json')
		}),
		new HtmlWebpackPlugin({
			title: 'Plugin App: Discovery and prototyping',
			filename: 'plugin/index.html',
			template: './src/views/port-page/port-page.handlebars',
			chunks: ['plugin'],
			hbsContext: require('./src/views/port-page/plugin.json')
		}),
		new HtmlWebpackPlugin({
			title: 'Assorted custom sites from scratch',
			filename: 'custom/index.html',
			template: './src/views/port-page/port-page.handlebars',
			chunks: ['custom'],
			hbsContext: require('./src/views/port-page/custom.json')
		}),
		new HtmlWebpackPlugin({
			title: 'Front-end Development',
			filename: 'cms/index.html',
			template: './src/views/port-page/port-page.handlebars',
			chunks: ['cms'],
			hbsContext: require('./src/views/port-page/cms.json')
		}),
		new HtmlWebpackPlugin({
			title: 'Resurgent',
			filename: 'resurgent/index.html',
			template: './src/views/port-page/port-page.handlebars',
			chunks: ['resurgent'],
			hbsContext: require('./src/views/port-page/resurgent.json')
		})
	],
	resolve: {
		extensions: ['', '.js', '.json', '.handlebars']
	}
};
