const ipfsCluster = require('../../')

// IPFS Cluster node (ipfs-cluster-service) must be running at port 9094 on the same machine
const cluster = ipfsCluster(process.env.CLUSTER_HOST || '127.0.0.1', '9094', {protocol: 'http'})

module.exports = cluster