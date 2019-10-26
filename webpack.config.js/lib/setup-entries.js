const path = require('path');
const glob = require('glob');

module.exports = function setupEntries(pattern, srcPath){

  return glob
    .sync(pattern)
    .reduce((res, filePath) => {

      let name = path
        .relative(srcPath, filePath)
        .split('.')
        .reverse()
        .splice(1)
        .reverse()
        .join('.')
      ;

      res[name] = filePath;

      return res;
    }, {})
  ;

}