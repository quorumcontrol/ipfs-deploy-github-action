const cluster = require('./helpers')
const assert = require('chai').assert

describe('version', () => {
    it('shows version', (done) => {
        cluster.version((err, version) => {
            assert.notExists(err, 'throws error while fetching cluster peer and ipfs daemon information')
            done()
        })
    })
})
