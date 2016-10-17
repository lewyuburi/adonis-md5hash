'use strict'

const md5 = require('js-md5')

let Hash = exports = module.exports = {}

Hash.make = function (value, rounds) {
  return md5(value)
}

Hash.verify = function (value, hash) {
  return (hash==md5(value)) ? true : false
}
