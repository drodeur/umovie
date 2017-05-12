var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'public/');
var APP_DIR = path.resolve(__dirname, 'src/');
var CORE_DIR = path.resolve(__dirname, 'core/');
var RESSOURCES_DIR = path.resolve(__dirname, 'ressources/');
var THEME_DIR = path.resolve(__dirname, 'theme/');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR + '/assets',
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : [APP_DIR, CORE_DIR, RESSOURCES_DIR, THEME_DIR],
        loader: 'babel-loader',
        query: {
          plugins: [
            'transform-runtime',
            'transform-decorators-legacy',
          ],
          presets: ['es2015', 'stage-0', 'react'],
        },
      },
      { test: /\.json?$/, loader: 'json' },
      { test: /\.(png|jpe?g)(\?.*)?$/, loader: 'url?limit=8182' },
      { test: /\.(svg|gif|ttf|woff2?|eot)(\?.*)?$/, loader: 'file' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css?module&localIdentName=[hash:base64:5]!resolve-url'}) },
      { test: /\.less\.lib$/, loader: ExtractTextPlugin.extract({fallback: 'style', use: 'css!resolve-url!less'}) },
      { test: /\.less$/, loader: ExtractTextPlugin.extract({fallback: 'style', use: 'css?module&localIdentName=[hash:base64:5]!resolve-url!less'}) }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __API_URL: JSON.stringify(process.env.API_URL || 'http://localhost/bin'),
      __DEV__: JSON.stringify(process.env.NODE_ENV !== 'production'),
      __DEV__: JSON.stringify(process.env.NODE_ENV !== 'production'),
      __CLIENT__: JSON.stringify(true)
    }),
    new ExtractTextPlugin({filename: '[name].css', allChunks: true})
  ],
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.css', '.less'],
    alias: {
      'project-core': path.join(__dirname, 'core'),
      'project-ressources': path.join(__dirname, 'ressources'),
      'project-root': path.join(__dirname, 'src'),
      'project-theme': path.join(__dirname, 'theme')
    }
  }
};

if(process.env.NODE_ENV === 'production') {
  config.plugins.push(new webpack.DefinePlugin({
    'process.env': { 
       NODE_ENV: JSON.stringify('production') 
     }
  }));
}

module.exports = config;
