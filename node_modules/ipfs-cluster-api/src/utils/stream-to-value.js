'use strict'

const pump = require('pump')
const concat = require('concat-stream')

function streamToValue (response, callback) {
  pump(
    response,
    concat((data) => callback(null, data)),
    (err) => {
      callback(err)
    }
  )
}

module.exports = streamToValue
