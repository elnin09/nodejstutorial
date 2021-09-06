const path = require('path')

console.log(path.sep)

const filePath = path.join('/content','contentinner','fileName.txt')
console.log(filePath)

const basePath = path.basename(filePath)
console.log(basePath)

const absolute = path.resolve(__dirname,'content','folder')
console.log(absolute)