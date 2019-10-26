const path = require('path');
const setupEntries = require('./lib/setup-entries');

const rootPath = require('process').cwd();
const srcPath = './src';

module.exports = {
  mode: 'development',
  entry: setupEntries(`./src/js/*.js`, srcPath),
  output: {
    filename: `[name].js`,
    path: path.resolve(rootPath, 'dist')
  }
}