const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');

module.exports = merge(baseConfig, {
  devtool: 'eval-source-map',

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
  }
});
