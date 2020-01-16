const cluster = require('./helpers')
const assert = require('chai').assert

describe('peers.ls', () => {
    it('lists cluster peers', (done) => {
        cluster.peers.ls((err, peers) => {
            assert.notExists(err, 'throws error while fetching the list of cluster peers')
            done()
        })
    })
})
