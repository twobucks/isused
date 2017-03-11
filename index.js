var fs = require('fs');
var deepKeys = require('deep-keys');
var file = require('file');

var keys = [];

function search(json, folder) {
  readJson(json)
    .then(() => traverseFolders(folder));
}


function readJson(jsonPath) {
  return new Promise((resolve, reject) => {
    fs.readFile(jsonPath, 'utf8', function (err,data) {
      if (err) {
        reject(err);
      }
      var json = JSON.parse(data);
      keys = deepKeys(json);
      resolve();
    })
  })
}

function traverseFolders(folder){
  file.walk(folder, function (err, dirPaths, dirs, files) {
    files.forEach(f => {
      fs.readFile(f, 'utf8', function (err,str) {
        if (err) {
          return console.log(err);
        }
        const filtered = keys.filter(k => {
          if(str.indexOf(k) > -1){
            return false;
          }
          return true;
        });
        console.log(keys);
        keys = filtered;
      });
    });
  });
}

module.exports = {
  search,
  readJson,
  traverseFolders
}
