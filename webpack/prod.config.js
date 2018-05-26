const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

const baseConfig = require('./base.config.js');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(baseConfig, {
  mode: 'production',

  output: {
    path: path.join(__dirname + '/../build'),
    filename: 'bundle.js'
  },

  devServer: {
    inline: true,
    contentBase: 'src',
    host: '0.0.0.0',
    port: '8080'
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },

  plugins: [
    // Extract imported CSS into own file
    // (ExtractTextPlugin not supported in webpack >= 4.0.0 yet)
    new MiniCssExtractPlugin({
      filename: 'bundle.css',
      chunkFilename: '[id].css'
    }),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),

    // Minify JS
    new UglifyJsPlugin({
      sourceMap: false
    })
  ]
});
