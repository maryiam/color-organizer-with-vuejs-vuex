'use strict';

const {VueLoaderPlugin} = require('vue-loader');
const HtmlWebpckPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const {distFolder, pathHelper} = require('./helper');

module.exports = {
  entry: './src/main.ts',
  output: {
    filename: '[name].[hash].bundle.js',
    path: pathHelper(distFolder)
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.(ts|vue)$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: [
          {
            loader: 'eslint-loader',
            options: {
              emitError: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@views': pathHelper('./src/views'),
      '@components': pathHelper('./src/components'),
      '@tests': pathHelper('./src/tests')
    }
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new cleanWebpackPlugin([distFolder], {
      root: pathHelper()
    }),
    new VueLoaderPlugin(),
    new HtmlWebpckPlugin({
      template: 'index.html',
      favicon: pathHelper('favicon.png')
    })
  ]
};
