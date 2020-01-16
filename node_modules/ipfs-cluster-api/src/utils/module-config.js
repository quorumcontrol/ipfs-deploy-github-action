'use strict'

const requestAPI = require('./request-api')

module.exports = (arg) => {

  if (typeof arg === 'function') {
    return arg
  } else if (typeof arg === 'object') {
    return requestAPI(arg)
  } else {
    throw new Error('Argument must be a send function or a config object.')
  }
}
