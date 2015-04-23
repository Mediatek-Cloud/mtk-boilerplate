var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.resolve('./src'),
  entry: path.resolve('./entry.js'),
  output: {
    path: path.resolve('./build/'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      { test: /\.html?$/, loader: 'html-loader'},
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel-loader'] },
      { test: /\.styl$/, loaders: ['style-loader', 'css-loader', 'autoprefixer-loader?{browsers: ["> 1%"]}', 'stylus-loader'] },
      { test: /\.otf$/, loaders: ['file-loader?name=[name].[ext]'] },
      { test: /\.svg$/, loaders: ['url-loader?limit=10000&name=[name].[ext]'] }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
  devtool: 'eval-source-map'
};
