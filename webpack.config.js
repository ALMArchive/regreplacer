const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

module.exports = {
   entry: './regreplace.js',
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'regreplace.bundle.js'
  }
};