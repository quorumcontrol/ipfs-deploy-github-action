const cluster = require('./helpers')
const assert = require('chai').assert

const CID = "QmRAQB6YaCyidP37UdDnjFY5vQuiBrcqdyoW1CuDgwxkD4"

describe('status', () => {

    it('lists current status of tracked CIDs with \'cluster_error\' status (local state)', (done) => {
        cluster.status(CID, { filter: 'cluster_error', local: true }, (err, details) => {
            assert.notExists(err, 'throws error while listing current status of tracked CIDs \'cluster_error\' status (local state)')
            done()
        })
    })

    it('lists current status of tracked CIDs with \'pin_error\' status (local state)', (done) => {
        cluster.status({ filter: 'error', local: true }, (err, details) => {
            assert.notExists(err, 'throws error while listing current status of tracked CIDs with \'pin_error\' status (local state)')
            done()
        })
    })

    it('lists current status of tracked CIDs with \'unpin_error\' status (local state)', (done) => {
        cluster.status({ filter: 'unpin_error', local: true }, (err, details) => {
            assert.notExists(err, 'throws error while listing current status of tracked CIDs with \'unpin_error\' status (local state)')
            done()
        })
    })

    it('lists current status of tracked CIDs with \'error\' status (local state)', (done) => {
        cluster.status({ filter: 'error', local: true }, (err, details) => {
            assert.notExists(err, 'throws error while listing current status of tracked CIDs with \'error\' status (local state)')
            done()
        })
    })

    it('lists current status of tracked CIDs with \'pinning\' status (local state)', (done) => {
        cluster.status({ filter: 'pinning', local: true }, (err, details) => {
            assert.notExists(err, 'throws error while listing current status of tracked CIDs with \'pinning\' status (local state)')
            done()
        })
    })

    it('lists current status of tracked CIDs with \'pinned\' status (local state)', (done) => {
        cluster.status({ filter: 'pinned', local: true }, (err, details) => {
            assert.notExists(err, 'throws error while listing current status of tracked CIDs with \'pinned\' status (local state)')
            done()
        })
    })

    it('lists current status of tracked CIDs with \'unpinning\' status (local state)', (done) => {
        cluster.status({ filter: 'unpinning', local: true }, (err, details) => {
            assert.notExists(err, 'throws error while listing current status of tracked CIDs with \'unpinning\' status (local state)')
            done()
        })
    })

    it('lists current status of tracked CIDs with \'unpinned\' status (local state)', (done) => {
        cluster.status({ filter: 'unpinned', local: true }, (err, details) => {
            assert.notExists(err, 'throws error while listing current status of tracked CIDs with \'unpinned\' status (local state)')
            done()
        })
    })

    it('lists current status of tracked CIDs with \'remote\' status (local state)', (done) => {
        cluster.status({ filter: 'remote', local: true }, (err, details) => {
            assert.notExists(err, 'throws error while listing current status of tracked CIDs with \'remote\' status (local state)')
            done()
        })
    })

    it('lists current status of tracked CIDs with \'pin_queued\' status (local state)', (done) => {
        cluster.status({ filter: 'pin_queued', local: true }, (err, details) => {
            assert.notExists(err, 'throws error while listing current status of tracked CIDs with \'pin_queued\' status (local state)')
            done()
        })
    })

    it('lists current status of tracked CIDs with \'unpin_queued\' status (local state)', (done) => {
        cluster.status({ filter: 'unpin_queued', local: true }, (err, details) => {
            assert.notExists(err, 'throws error while listing current status of tracked CIDs with \'unpin_queued\' status (local state)')
            done()
        })
    })

    it('lists current status of tracked CIDs with \'queued\' status (local state)', (done) => {
        cluster.status({ filter: 'queued', local: true }, (err, details) => {
            assert.notExists(err, 'throws error while listing current status of tracked CIDs with \'queued\' status (local state)')
            done()
        })
    })

    it('lists current status of a tracked CID', (done) => {
        cluster.status(CID, (err, details) => {
            assert.notExists(err, 'throws error while listing current status of a tracked CID')
            done()
        })
    })

    it('lists current status', (done) => {
        cluster.status((err, details) => {
            assert.notExists(err, 'throws error while listing current status')
            done()
        })
    })
})
