const path = require('path');
const setupEntries = require('./lib/setup-entries');
const setupHtml = require('./lib/setup-html');

const rootPath = require('process').cwd();
const srcPath = './src';

module.exports = {
  mode: 'development',
  entry: setupEntries(`${srcPath}/js/*.js`, srcPath),
  output: {
    filename: `[name].js`,
    path: path.resolve(rootPath, 'dist')
  },
  plugins: []
    .concat(
      setupHtml(`${srcPath}/*.html`, srcPath)
    )
}