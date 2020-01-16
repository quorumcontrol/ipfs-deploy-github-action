'use strict'

const pkg = require('../../package.json')

exports = module.exports = () => {
  return {
    'api-path': '/',
    'user-agent': `/node-${pkg.name}/${pkg.version}/`,
    host: 'localhost',
    port: '9094',
    protocol: 'http'
  }
}