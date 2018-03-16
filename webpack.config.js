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
            loaders: ["style-loader", "css-loder"]
        }
    ]
  },
  output: {
      path: parentDir + '/dist',
      filename: 'bundle.js'
  },
  devServer: {
      contentBase: parentDir,
      historyApiFallback: true
  }
}
