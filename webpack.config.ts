import * as path from 'path'
import { VueLoaderPlugin } from 'vue-loader'
import * as webpack from 'webpack'

const distDir = path.resolve(__dirname, 'dist')
const srcDir = path.resolve(__dirname, 'src')

const config: webpack.Configuration = {
	context: srcDir,
	entry: './main.ts',
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				loader: 'ts-loader',
				options: {
					appendTsSuffixTo: [/\.vue$/]
				}
			},
		]
	},
	output: {
		libraryTarget: 'umd',
		path: distDir
	},
	plugins: [
		new VueLoaderPlugin()
	],
	resolve: {
		extensions: ['.ts', '.vue']
	}
}

export default config
