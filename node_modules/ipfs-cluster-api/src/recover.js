'use strict'

const promisify = require('promisify-es6')
const moduleConfig = require('./utils/module-config')

module.exports = (arg) => {
  const send = moduleConfig(arg)

  return promisify((args, opts, callback) => {    
    if(typeof opts == 'function') {
      callback = opts
      if(typeof args !== 'string') {
        opts = args
        args = undefined
      }
      else {
        opts = undefined
      }
    }
    if(typeof args === 'function') {
      callback = args
      args = undefined
    }
    var recoverPath = 'pins/recover'

    if(args) {
      recoverPath = `pins/${args}/recover`
    }

    send({
      method: 'POST',
      path: recoverPath,
      qs: opts || { local: true }
    }, callback)
  })
}