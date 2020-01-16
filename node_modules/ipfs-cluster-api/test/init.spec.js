const assert = require('chai').assert
const ipfsCluster = require('../src')

// connect to ipfs daemon API server
const cluster1 = ipfsCluster('localhost', '9094', { protocol: 'http' }) // leaving out the arguments will default to these values

// or connect with multiaddr
const cluster2 = ipfsCluster('/ip4/127.0.0.1/tcp/9094')

// or using options
const cluster3 = ipfsCluster({ host: 'localhost', port: '9094', protocol: 'http' })

// or specifying a specific API path
const cluster4 = ipfsCluster({ host: 'localhost', port: '9094', 'api-path': '/' })

describe('init', () => {
    it('connects to a cluster node using (host, port, opts)', (done) => {
        cluster1.id((err, id) => {
            assert.equal(err, null, 'throws error while conncting to cluster node')
            assert.containsAllKeys(
                id,
                ['id', 'addresses', 'cluster_peers', 'version', 'rpc_protocol_version', 'ipfs', 'peername'],
                'missing params in id of the connected node')
            assert.equal(id.error, '', 'throws error while conncting to cluster node')
            done()
        })
    })

    it('connects to a cluster node using (host, port, opts)', (done) => {
        cluster2.id((err, id) => {
            assert.equal(err, null, 'throws error while conncting to cluster node')
            assert.containsAllKeys(
                id,
                ['id', 'addresses', 'cluster_peers', 'version', 'rpc_protocol_version', 'ipfs', 'peername'],
                'missing params in id of the connected node')
            assert.equal(id.error, '', 'throws error while conncting to cluster node')
            done()
        })
    })

    it('connects to a cluster node using (host, port, opts)', (done) => {
        cluster3.id((err, id) => {
            assert.equal(err, null, 'throws error while conncting to cluster node')
            assert.containsAllKeys(
                id,
                ['id', 'addresses', 'cluster_peers', 'version', 'rpc_protocol_version', 'ipfs', 'peername'],
                'missing params in id of the connected node')
            assert.equal(id.error, '', 'throws error while conncting to cluster node')
            done()
        })
    })

    it('connects to a cluster node using (host, port, opts)', (done) => {
        cluster4.id((err, id) => {
            assert.equal(err, null, 'throws error while conncting to cluster node')
            assert.containsAllKeys(
                id,
                ['id', 'addresses', 'cluster_peers', 'version', 'rpc_protocol_version', 'ipfs', 'peername'],
                'missing params in id of the connected node')
            assert.equal(id.error, '', 'throws error while conncting to cluster node')
            done()
        })
    })

})
