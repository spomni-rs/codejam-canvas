const path = require('path');
const setupEntries = require('./lib/setup-entries');
const setupHtml = require('./lib/setup-html');
const setupStatic = require('./lib/setup-static');

const {
  rootPath,
  srcPath,
  destPath
} = require('./lib/variables');

module.exports = {

  mode: 'development',

  entry: setupEntries(`${srcPath}/js/*.js`, srcPath),

  output: {
    filename: `[name].js`,
    path: path.resolve(rootPath, destPath)
  },

  module: {
    rules: [
      {
        test: /\.html$/i,
        use: [
          'html-loader'
        ]
      },
      setupStatic(/\.(svg|png|jpg|jpeg|gif)$/i), // to the same relative path
      setupStatic(/\.(woff|woff2|eot|ttf|otf)$/i) // to the same relative path
    ]
  },

  plugins: []
    .concat(
      setupHtml(`${srcPath}/*.html`, srcPath)
    )
}
