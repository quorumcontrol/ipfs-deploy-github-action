'use strict'

function getCommands() {
  const cmds = {
    add: require('../add'),
    id: require('../id'),
    peers: require('../peers'),
    pin: require('../pin'),
    status: require('../status'),
    sync: require('../sync'),
    recover: require('../recover'),
    version: require('../version'),
    health: require('../health')
  }

  return cmds
}

function loadCommands(send) {
  const files = getCommands()
  const cmds = {}

  Object.keys(files).forEach((file) => {
    cmds[file] = files[file](send)
  })

  return cmds
}

module.exports = loadCommands
