const cluster = require('./helpers')
const assert = require('chai').assert
const fs = require('fs')

const obj = {
    path: 'src/add.js',
    content: Buffer.from(fs.readFileSync('src/add.js'))
}

describe('add', () => {
    
    it('adds a file Buffer to ipfs and pins it in the cluster', (done) => {
        cluster.add(obj, (err, result) => {
            assert.notExists(err, 'throws error while adding  a file Buffer to ipfs')
            done()
        })
    })

    it('adds a file object to ipfs and pins it in the cluster', (done) => {
        cluster.add(Buffer.from("vasa"), (err, result) => {
            assert.notExists(err, 'throws error while adding a file object to ipfs')
            done()
        })
    })

    it('throws error while adding a string as arg param', (done) => {
        cluster.add('vasa', (err, result) => {
            assert.exists(err, 'does not throw error while adding a string as arg param')
            done()
        })
    })
})