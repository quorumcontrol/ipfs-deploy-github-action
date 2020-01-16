const cluster = require('./helpers')
const assert = require('chai').assert

describe('health.graph', () => {
    it('creates a graph displaying connectivity of cluster peers (without options)', (done) => {
        cluster.health.graph((err, health) => {
            assert.notExists(err, 'throws error while creating a graph displaying connectivity of cluster peers (without options)')
            done()
        })
    })
})
