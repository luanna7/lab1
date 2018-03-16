var webpack = require('webpack');
var path = require('path');

var parentDir = path.join(__dirname, '/public');

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
  }
}
