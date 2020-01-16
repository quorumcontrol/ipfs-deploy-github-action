const cluster = require('./helpers')
const assert = require('chai').assert

const CID = "QmRAQB6YaCyidP37UdDnjFY5vQuiBrcqdyoW1CuDgwxkD4"

describe('pin.ls', () => {

    it('lists details for CIDs with no \'filter\' option', (done) => {
        cluster.pin.ls((err, details) => {
            assert.notExists(err, 'throws error while listing details for CIDs with no \'filter\' option')
            done()
        })
    })

    it('lists details for CIDs with \'all\' filter', (done) => {
        cluster.pin.ls({ filter: 'all' }, (err, details) => {
            assert.notExists(err, 'throws error while listing details for CIDs with \'all\' filter')
            done()
        })
    })

    it('lists details for CIDs with \'pin\' filter', (done) => {
        cluster.pin.ls({ filter: 'pin' }, (err, details) => {
            assert.notExists(err, 'throws error while listing details for CIDs with \'pin\' filter')
            done()
        })
    })

    it('lists details for CIDs with \'meta-pin\' filter', (done) => {
        cluster.pin.ls({ filter: 'meta-pin' }, (err, details) => {
            assert.notExists(err, 'throws error while listing details for CIDs with \'meta-pin\' filter')
            done()
        })
    })

    it('lists details for CIDs with \'clusterdag-pin\' filter', (done) => {
        cluster.pin.ls({ filter: 'clusterdag-pin' }, (err, details) => {
            assert.notExists(err, 'throws error while listing details for CIDs with \'clusterdag-pin\' filter')
            done()
        })
    })

    it('lists details for CIDs with \'shard-pin\' filter', (done) => {
        cluster.pin.ls({ filter: 'shard-pin' }, (err, details) => {
            assert.notExists(err, 'throws error while listing details for CIDs with \'shard-pin\' filter')
            done()
        })
    })

})