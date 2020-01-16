'use strict'

const moduleConfig = require('../utils/module-config')

module.exports = (arg) => {
  const send = moduleConfig(arg)

  return {
    graph: require('./graph')(send),
    metrics: require('./metrics')(send)
  }
}
