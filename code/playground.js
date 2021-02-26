const fs = require('fs')
const path = require('path')

const axiosPath = path.join('../code', './lib', '/axois')

const file = fs.readFileSync('./lib.js', { encoding: 'utf-8' })
  .toString()

console.log(axiosPath)
