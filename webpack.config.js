var webpack = require('webpack');
var path = require('path');

var parentDir = path.join(__dirname, '/public');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
  entry: path.join(parentDir, './src/index.js'),
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },
        {
            test: /\.css$/,
            loaders: ["style-loader", "css-loader"]
        },
        {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            loader: 'file-loader'
        }
    ]
  },
  output: {
      path: parentDir + '/dist',
      filename: 'bundle.js'
  },
  devServer: {
      contentBase: parentDir,
      historyApiFallback: true,
      hot: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new UglifyJsPlugin(),
    new BundleAnalyzerPlugin()
  ]
}
