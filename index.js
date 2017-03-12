'strict mode'
const rfs = require('fs')
const Promise = require('bluebird')
const deepKeys = require('deep-keys')
const dir = require('node-dir')

const fs = Promise.promisifyAll(rfs)

function search(json, folder) {
  let props = []
  return fs.readFileAsync(json, 'utf8')
    .then(jsonData => {
      const json = JSON.parse(jsonData)
      props = deepKeys(json)
    })
    .then(() => traverseFolders(folder))
    .then(files => filterFiles(files, props))
    .catch(err => {
      console.log('error', err)
    })
}

function traverseFolders(folder) {
  return new Promise((resolve, reject) => {
    dir.files(folder, (err, files) => {
      if (err) {
        reject(err)
      }
      return Promise.map(files, f => {
        return fs.readFileAsync(f, 'utf8')
      })
      .then(resolve)
      .catch(reject)
    })
  })
}

function filterFiles(files, k) {
  let keys = k
  files.forEach(f => {
    keys = filterKeys(f, keys)
  })
  return keys
}

function filterKeys(file, keys) {
  return keys.filter(k => {
    if (file.indexOf(k) > -1) {
      return false
    }
    return true
  })
}

module.exports = {
  search,
  traverseFolders
}
