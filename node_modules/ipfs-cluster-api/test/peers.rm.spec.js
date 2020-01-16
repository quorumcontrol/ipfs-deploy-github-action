const cluster = require('./helpers')
const assert = require('chai').assert

describe('peers.rm', () => {
    
    it('throws error while removing peer with invalid id', (done) => {
        cluster.peers.rm("invalidID", (err) => {
            assert.notDeepEqual(err, null, "removes peer with invalid id")
            done()
        })
    })

    cluster.peers.ls((err, peers) => {
        assert.equal(err, null, 'throws error while fetching the list of cluster peers')
        if (peers.length>=2){
            it('removes a cluster peer by id', (done) => {
                cluster.peers.rm(peers[1].id, {}, (err) => {
                    assert.equal(err, null, 'throws error while removing a cluster peer by id')
                    done()
                })
            })    
        }
    })
})
