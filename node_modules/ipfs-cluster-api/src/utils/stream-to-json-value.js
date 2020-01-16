'use strict'

const streamToValue = require('./stream-to-value')

function streamToJsonValue (res, callback) {
  streamToValue(res, (err, data) => {
    if (err) {
      return callback(err)
    }

    if (!data || data.length == 0) {
      return callback()
    }

    if (Buffer.isBuffer(data)) {
      data = data.toString()
    }

    let res
    try {
      res = JSON.parse(data)
    } catch (err) {
      callback(err)
    }

    callback(null, res)
  })
}

module.exports = streamToJsonValue
