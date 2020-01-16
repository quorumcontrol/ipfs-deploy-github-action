'use strict'

const moduleConfig = require('../utils/module-config')

module.exports = (arg) => {
  const send = moduleConfig(arg)

  return {
    rm: require('./rm')(send),
    ls: require('./ls')(send)
  }
}
