'use strict'

const promisify = require('promisify-es6')

module.exports = (send) => {

  return promisify((arg, callback) => {
    var monitorPath = 'monitor/metrics';
    if (arg) {
      monitorPath += '/' + arg
    }
    send({
      path: monitorPath,
    }, callback)
  })
}
