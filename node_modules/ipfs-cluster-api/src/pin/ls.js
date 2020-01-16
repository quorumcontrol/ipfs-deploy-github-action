'use strict'

const promisify = require('promisify-es6')

module.exports = (send) => {
  return promisify((opts, callback) => {
    
    if(typeof opts === 'function') {
      callback = opts
      opts = undefined      
    }

    send({
      path: 'allocations',
      qs: opts
    }, callback)
  })
}
