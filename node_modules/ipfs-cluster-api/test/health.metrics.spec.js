const cluster = require('./helpers')
const assert = require('chai').assert

describe('health.metrics', () => {
    it('logs \'freespace\' metrics for a peer', (done) => {
        cluster.health.metrics('freespace', (err, metrics) => {
            assert.notExists(err, 'throws error while logging metrics for a peer')
            done()
        })
    })

    it('logs \'ping\' metrics for a peer', (done) => {
        cluster.health.metrics('ping', (err, metrics) => {
            assert.notExists(err, 'throws error while logging metrics for a peer')
            done()
        })
    })
})