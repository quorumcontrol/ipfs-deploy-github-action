const cluster = require('./helpers')
const assert = require('chai').assert

const CID = "QmRAQB6YaCyidP37UdDnjFY5vQuiBrcqdyoW1CuDgwxkD4"

describe('recover', () => {
    
    it('attempts to re-pin/unpin a CID in error state (local=true)', (done) => {
        cluster.recover(CID, { local: true }, (err) => {
            assert.notExists(err, 'throws error while attempting to re-pin/unpin a CID in error state (local)')
            done()
        })
    })

    it('attempts to re-pin/unpin all CIDs in error state (local=true)', (done) => {
        cluster.recover({ local: true }, (err) => {
            assert.notExists(err, 'throws error while attempting to re-pin/unpin all CIDs in error state (local)')
            done()
        })
    })

    it('attempts to re-pin/unpin all CIDs in error state (local=true)', (done) => {
        cluster.recover((err) => {
            assert.notExists(err, 'throws error while attempting to re-pin/unpin all CIDs in error state (cluster)')
            done()
        })
    })

    it('attempts to re-pin/unpin a CID in error state (local=true)', (done) => {
        cluster.recover(CID, (err) => {
            assert.notExists(err, 'throws error while attempting to re-pin/unpin a CID in error state (cluster)')
            done()
        })
    })
})
