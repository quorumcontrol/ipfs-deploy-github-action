const cluster = require('./helpers')
const assert = require('chai').assert

const CID = "QmRAQB6YaCyidP37UdDnjFY5vQuiBrcqdyoW1CuDgwxkD4"

describe('sync', () => {

    it('checks status of all seen status against status reported by the IPFS daemon', (done) => {
        cluster.sync({ local: true }, (err) => {
            assert.notExists(err, 'throws error while checking status of all seen status against status reported by the IPFS daemon')
            done()
        })
    })

    it('checks status of a CID on the local cluster node', (done) => {
        cluster.sync(CID, { local: true }, (err) => {
            assert.notExists(err, 'throws error while checking status of a CID on the local cluster node')
            done()
        })
    })

    it('checks status of pinset from all the cluster peers', (done) => {
        cluster.sync((err) => {
            assert.notExists(err, 'throws error while checking status of pinset from all the cluster peers')
            done()
        })
    })

    it('checks status of a CID against status reported by the IPFS daemon', (done) => {
        cluster.sync(CID, (err) => {
            assert.notExists(err, 'throws error while checking status of a CID against status reported by the IPFS daemon')
            done()
        })
    })
})
