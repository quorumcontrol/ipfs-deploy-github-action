'use strict'

const TransformStream = require('readable-stream').Transform

/*
  Transforms a stream of {Name, Hash} objects to include size
  of the DAG object.

  Usage: inputStream.pipe(new FileResultStreamConverter())

  Input object format:
  {
    name: '/path/to/file/foo.txt',
    cid: { '/': 'QmRG3FXAW76xD7ZrjCWk8FKVaTRPYdMtwzJHZ9gArzHK5f' },
    size: 2417 
  }

  Output object format:
  {
    path: '/path/to/file/foo.txt',
    hash: 'QmRG3FXAW76xD7ZrjCWk8FKVaTRPYdMtwzJHZ9gArzHK5f',
    size: 2417
  }
*/
class FileResultStreamConverter extends TransformStream {
  constructor (options) {
    const opts = Object.assign({}, options || {}, { objectMode: true })
    super(opts)
  }

  _transform (obj, enc, callback) {
    if (!obj.name) {
      return callback()
    }

    callback(null, {
      path: obj.name,
      hash: obj.cid['/'],
      size: parseInt(obj.size, 10)
    })
  }
}

module.exports = FileResultStreamConverter
