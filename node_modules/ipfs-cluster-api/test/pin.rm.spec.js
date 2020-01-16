const cluster = require('./helpers')
const assert = require('chai').assert

const CID = "QmYfGFTxovH4pU4EQymD875ArcmizJon8n1iBVXpSZbwvG"

describe('pin.rm', () => {
    it('unpins a CID from the cluster (without options)', (done) => {
        cluster.pin.rm(CID, (err) => {
            assert.notExists(err, 'throws error while unpinning a CID from the cluster (without options)')
            done()
        })
    })
})
