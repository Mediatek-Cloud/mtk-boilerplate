var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var PathRewriterPlugin = require('webpack-path-rewriter');

var cssExtractor = new ExtractTextPlugin('css', 'main.css');
var htmlExtractor = new ExtractTextPlugin('html', 'index.html');

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

      // { test: /\.html?$/, loader: PathRewriterPlugin.rewriteAndEmit({ name: 'index.html' })},
      { test: /\.html?$/, loader: htmlExtractor.extract('html-loader')},
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel-loader'] },
      { test: /\.styl$/, loader: cssExtractor.extract('style-loader', 'css-loader!autoprefixer-loader?{browsers: ["> 1%"]}!stylus-loader') },
      { test: /\.otf$/, loaders: ['file-loader?name=[name].[ext]'] },
      { test: /\.svg$/, loaders: ['url-loader?limit=10000&name=[name].[ext]'] }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    cssExtractor,
    htmlExtractor

    // new PathRewriterPlugin()
  ],
  devtool: 'eval-source-map'
};
