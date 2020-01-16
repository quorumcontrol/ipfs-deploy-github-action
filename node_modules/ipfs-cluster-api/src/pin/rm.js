'use strict'

const promisify = require('promisify-es6')

module.exports = (send) => {
  return promisify((arg, callback) => {
    var rmPath = `pins/${arg}`
    send({
      path: rmPath,
      method: 'DELETE',
    }, callback)
  })
}
