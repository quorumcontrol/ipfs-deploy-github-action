'use strict'

const promisify = require('promisify-es6')
const moduleConfig = require('./utils/module-config')

module.exports = (arg) => {
  const send = moduleConfig(arg)

  return promisify((cid, opts, callback) => {
    if (typeof cid == 'function') {
      callback = cid
      cid = undefined
      opts = undefined
    }
    if(typeof opts == 'function') {
      callback = opts
      if(typeof cid == 'string') {
        opts = undefined
      }
      else{
        opts = cid
        cid = undefined
      }
    }

    var syncPath = 'pins/sync'
    if (cid) {
      syncPath = `pins/${cid}/sync`
    }

    send({
      method: 'POST',
      path: syncPath,
      qs: opts
    }, callback)
  })
}
