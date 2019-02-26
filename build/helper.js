const path = require('path');

const cssLoader = [
  'css-loader',
  'sass-loader',
  {
    loader: 'style-resources-loader',
    options: {
      patterns: [path.resolve('./src/styles/*.scss')]
    }
  }
];

const distFolder = 'dist';


const pathHelper = (dir = '') => path.resolve(__dirname, '..', dir);

module.exports = {
  distFolder,
  cssLoader,
  pathHelper
};