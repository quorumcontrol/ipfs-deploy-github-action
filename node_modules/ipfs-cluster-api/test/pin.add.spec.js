const cluster = require('./helpers')
const assert = require('chai').assert

const CID = "QmYfGFTxovH4pU4EQymD875ArcmizJon8n1iBVXpSZbwvG"

describe('pin.add', () => {
    it('pins a CID in the cluster (without options)', (done) => {
        cluster.pin.add(CID, (err) => {
            assert.notExists(err, 'throws error while pinning a CID in the cluster (without options)')
            done()
        })
    })

    it('pins a CID in the cluster(with \'name\' option)', (done) => {
        cluster.pin.add("Qme3dHNjq2Uz34jt3P2Dj72ZfYxPix8NkQjwXDrcZpogpK", { allocations: ["QmSPWhEHZGB6URg1EGNCMDHFHTqv73pM9T4AfG6AvpW2Gm"], name : "named_CID", replication_factor_min: 0, replication_factor_max: 7 }, (err) => {
            assert.notExists(err, 'throws error while pinning a CID in the cluster (without options)')
            done()
        })
    })
})
