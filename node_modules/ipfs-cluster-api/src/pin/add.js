'use strict'

const promisify = require('promisify-es6')

module.exports = (send) => {
  return promisify((arg, opts, callback) => {
    if (typeof opts == 'function') {
      callback = opts
      opts = undefined
    }

    var addPath = `pins/${arg}`

    send({
      method: 'POST',
      path: addPath,
      qs: opts
    }, callback)
  })
}
