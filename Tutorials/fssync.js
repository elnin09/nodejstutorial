const {readFileSync, writeFileSync} = require('fs')
const path = require('path')

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/test.txt','utf8')

console.log(first)
console.log(second)

writeFileSync('./content/first.txt',`Here is the result : ${first}, ${second}`)
writeFileSync('./content/test.txt',`Here is the result : ${first}, ${second}`, {flag: 'a'})