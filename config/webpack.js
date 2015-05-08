import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const STYLUS_LOADER = [
  'style',
  'css',
  'autoprefixer?{browsers: ["> 1%"]}',
  'stylus?' + JSON.stringify({paths: path.resolve(__dirname, '../node_modules/bootstrap-styl/')})
];

const config = {
  entry: path.resolve(__dirname, '../src/client/scripts/client.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  module: {
    loaders: [
      { test: /\.html?$/, loader: 'html'},
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot', 'babel?optional=es7.objectRestSpread'] },
      { test: /\.styl$/, loaders:  STYLUS_LOADER},
      { test: /\.json$/, loaders: ['json'] }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, '../src/client/index.html')})
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.styl']
  },
  devtool: 'eval-source-map'
};

export default config;

