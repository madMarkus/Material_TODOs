const merge = require('webpack-merge');
const webpack = require('webpack');
const baseConfig = require('./base.config.js');

module.exports = merge(baseConfig, {
  devtool: 'eval-source-map',
  mode: 'development',

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
        use: ['style-loader', 'css-loader?importLoaders=1']
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
});
