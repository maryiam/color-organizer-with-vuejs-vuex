'use strict';

const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const {cssLoader} = require('./helper.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['vue-style-loader', ...cssLoader]
      }
    ]
  },
  devServer: {
    hot: true,
    watchOptions: {
      poll: true
    }
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
});
