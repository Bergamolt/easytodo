const path = require('path')

const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  watch: true,
  mode: 'development',
  entry: './src/js/index.js',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3005,
  },
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'index.[hash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: './src/index.pug',
      minify: false
    }),
    new HtmlWebpackPugPlugin()
  ]
}
