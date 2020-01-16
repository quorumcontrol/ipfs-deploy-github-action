'use strict'

const getConfig = require('./utils/default-config')
const getRequestAPI = require('./utils/request-api')
const loadCommands = require('./utils/load-commands')
const multiaddr = require('multiaddr')

function IpfsClusterAPI(hostOrMultiaddr, port, opts) {
  // convert all three params to objects that we can merge.
  let hostAndPort = {}

  if (!hostOrMultiaddr) {
    // autoconfigure host and port in browser
    if (typeof self !== 'undefined') {
      const split = self.location.host.split(':')
      hostAndPort.host = split[0]
      hostAndPort.port = split[1]
    }
  } else if (multiaddr.isMultiaddr(hostOrMultiaddr)) {
    hostAndPort = toHostAndPort(hostOrMultiaddr)
  } else if (typeof hostOrMultiaddr === 'object') {
    hostAndPort = hostOrMultiaddr
  } else if (typeof hostOrMultiaddr === 'string') {
    if (hostOrMultiaddr[0] === '/') {
      // throws if multiaddr is malformed or can't be converted to a nodeAddress
      hostAndPort = toHostAndPort(multiaddr(hostOrMultiaddr))
    } else {
      // hostOrMultiaddr is domain or ip address as a string
      hostAndPort.host = hostOrMultiaddr
    }
  }

  if (port && typeof port !== 'object') {
    port = { port: port }
  }
  const config = Object.assign(getConfig(), hostAndPort, port, opts)
  const requestAPI = getRequestAPI(config)
  const cmds = loadCommands(requestAPI)
  cmds.send = requestAPI
  cmds.Buffer = Buffer

  return cmds
}

// throws if multiaddr can't be converted to a nodeAddress
function toHostAndPort (multiaddr) {
  const nodeAddr = multiaddr.nodeAddress()
  return {
    host: nodeAddr.address,
    port: nodeAddr.port
  }
}

exports = module.exports = IpfsClusterAPI
