
<p align="center">
<img src="https://i.pinimg.com/564x/f4/f9/68/f4f968409552de91c2ff09d2a141f2e4.jpg" alt="ipfs-cluster-api" />
</p>
<h3 align="center">A Javascript client library for the IPFS Cluster HTTP API.</h3>

[![Made by](https://img.shields.io/badge/made%20by-Cluster%20Labs-blue.svg?style=flat-square)](https://clusterlabs.io) [![Main project](https://img.shields.io/badge/project-ipfscloud-blue.svg?style=flat-square)](http://github.com/cluster-labs/ipfscloud-web) [![npm version](https://badge.fury.io/js/ipfs-cluster-api.svg)](https://badge.fury.io/js/ipfs-cluster-api)
 <a href=""><img src="https://img.shields.io/badge/npm-%3E%3D3.0.0-orange.svg?style=flat-square" /></a> <a href=""><img src="https://img.shields.io/badge/Node.js-%3E%3D8.0.0-orange.svg?style=flat-square" /></a> <a href="https://david-dm.org/cluster-labs/ipfs-cluster-api"><img src="https://david-dm.org/cluster-labs/ipfs-cluster-api.svg?style=flat-square" /></a> <a href="https://bundlephobia.com/result?p=ipfs-cluster-api"><img src="https://flat.badgen.net/bundlephobia/minzip/ipfs-cluster-api"></a> <a href="https://github.com/feross/standard"><img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square"></a>
 [![Join the chat at https://gitter.im/ipfs-cluster-api/community](https://badges.gitter.im/cluster-labs/ipfs-cluster-api.svg)](https://gitter.im/ipfs-cluster-api/community)
 [![Build Status](https://travis-ci.org/cluster-labs/ipfs-cluster-api.svg?branch=master)](https://travis-ci.org/cluster-labs/ipfs-cluster-api)
 [![Code Coverage](https://codecov.io/gh/cluster-labs/ipfs-cluster-api/branch/master/graph/badge.svg)](https://codecov.io/gh/cluster-labs/ipfs-cluster-api)
---

**UNOFFICIAL AND ALPHA**

This is a port of `ipfs/js-ipfs-api` adapted for the API exposed by `ipfs/ipfs-cluster`.

## Maintainer

[**Vaibhav Saini**](https://github.com/vasa-develop)

## Table of Contents

- [Install](#install)
  - [Running the daemon with the right port](#running-the-daemon-with-the-right-port)
  - [Importing the module and usage](#importing-the-module-and-usage)
	- [In a web browser through Browserify](#through-browserify)
	- [In a web browser through Webpack](#through-webpack)
	- [In a web browser through CDN](#from-cdn)
  - [Custom Headers](#custom-headers)
- [Usage](#usage)
  - [API Docs](#api)
  - [Callbacks and promises](#callbacks-and-promises)
- [Development](#development)
- [Contribute](#contribute)
- [Historical Context](#historical)
- [License](#license)


## Install

This module uses node.js, and can be installed through npm:

```
npm install --save ipfs-cluster-api
```

We support both the Current and Active LTS versions of Node.js. Please see [nodejs.org](https://nodejs.org/) for what these currently are.

### Running the daemon with the right port

**ipfs daemon**

To make `ipfs-cluster-service` work, you need to have a `ipfs` local daemon running. It needs to be open on the right port. `5001` is the default, and is used in the examples below, but it can be set to whatever you need.

```
# Show the ipfs config API port to check it is correct
> ipfs config Addresses.API
/ip4/127.0.0.1/tcp/5001
# Set it if it does not match the above output
> ipfs config Addresses.API /ip4/127.0.0.1/tcp/5001
# Restart the daemon after changing the config

# Run the daemon
> ipfs daemon
```

**ipfs-cluster-service daemon**

To interact with the API, you need to have a daemon running. It needs to be open on the right port. `9094` is the default, and is used in the examples below, but it can be set to whatever you need. You can setup `ipfs-cluster-service` by following [**this installation guide**](https://github.com/ipfs/ipfs-cluster#install). 

After installing run the daemon.

```
# Run the daemon
> ipfs-cluster-service daemon
```

### Importing the module and usage

```javascript
const ipfsCluster = require('ipfs-cluster-api')

// connect to ipfs daemon API server
const cluster = ipfsCluster('localhost', '9094', { protocol: 'http' }) // leaving out the arguments will default to these values

// or connect with multiaddr
const cluster = ipfsCluster('/ip4/127.0.0.1/tcp/9094')

// or using options
const cluster = ipfsCluster({ host: 'localhost', port: '9094', protocol: 'http' })

// or specifying a specific API path
const cluster = ipfsCluster({ host: '1.1.1.1', port: '80', 'api-path': '/some/api/path' })
```

### In a web browser

#### **through Browserify**
Same as in Node.js, you just have to [browserify](http://browserify.org/) to bundle the code before serving it.
 > Note: The code uses `es6`, so you have to use [babel](https://babeljs.io/) to convert the code into `es5` before using `browserify`. 

#### **through webpack**
Same as in Node.js, you just have to [webpack](https://webpack.js.org/) to bundle the the code before serving it.
 > Note: The code uses `es6`, so you have to use [babel](https://babeljs.io/) to convert the code into `es5` before using `webpack`.

#### **from CDN**

Instead of a local installation (and browserification) you may request a remote copy of IPFS API from unpkg CDN.

To always request the latest version, use the following:
```html
<!-- loading the minified version -->
<script src="https://unpkg.com/ipfs-cluster-api/dist/src/index.min.js"></script>
<!-- loading the human-readable (not minified) version -->
<script src="https://unpkg.com/ipfs-cluster-api/dist/src/index.js"></script>
```

CDN-based IPFS Cluster API provides the `IpfsClusterAPI` constructor as a method of the global `window` object. Example:

```javascript
// connect to ipfs daemon API server
const cluster = IpfsClusterAPI('localhost', '9094', { protocol: 'http' }) // leaving out the arguments will default to these values

// or connect with multiaddr
const cluster = IpfsClusterAPI('/ip4/127.0.0.1/tcp/9094')

// or using options
const cluster = IpfsClusterAPI({ host: 'localhost', port: '9094', protocol: 'http' })

// or specifying a specific API path
const cluster = IpfsClusterAPI({ host: '1.1.1.1', port: '80', 'api-path': '/some/api/path' })
```

If you omit the host and port, the client will parse `window.host`, and use this information. This also works, and can be useful if you want to write apps that can be run from multiple different gateways:

```javascript
const cluster = window.IpfsClusterAPI()
```

### **Custom Headers**

If you wish to send custom headers with each request made by this library, for example, the Authorization header. You can use the config to do so:

```javascript
const cluster = ipfsCluster({
  host: 'localhost',
  port: 9094,
  protocol: 'http',
  headers: {
    authorization: 'Basic ' + TOKEN
  }
})
```


## Usage

### API

The API is currently a work-in-progress. The exposed methods are designed
to be similar to `ipfs-cluster-ctl` provided in [`ipfs/ipfs-cluster`](https://github.com/ipfs/ipfs-cluster).

-	[`add`](#adding-&-pinning-data-to-cluster)
	-	[`cluster.add(data, [options], [callback])`](#add)
-	[`peers`](#peer-management)
	-	[`cluster.peers.ls([callback])`](#peersls)
	-	[`cluster.peers.rm(peerid, [callback])`](#peersremove)
-	[`pin`](#pins-management)
	-	[`cluster.pin.ls([options], [callback])`](#pinls)
	-	[`cluster.pin.add(cid, [options], [callback])`](#pinadd)
	-	[`cluster.pin.rm(cid, [callback])`](#pinremove)
-	[`health`](#health)
	- [`cluster.health.graph([callback])`](#graph)
	- [`cluster.health.metrics(type, [callback])`](#metrics)
-	[`miscellaneous`](#node-management)
	-	[`cluster.id([callback])`](#id)
	-	[`cluster.version([callback])`](#version)
	- [`cluster.status([cid], [options], [callback])`](#status)
	-	[`cluster.sync([cid], [options], [callback])`](#sync)
	-	[`cluster.recover([cid], [options], [callback])`](#recover)


### Adding & pinning data to cluster
#### **`add`**
> Add and pin data to the cluster

Add allows to add and replicate content to several ipfs daemons, performing a Cluster Pin operation on success. It takes elements from local paths as well as from web URLs (accessed with a GET request).

Cluster Add is equivalent to "ipfs add" in terms of DAG building, and supports the same options for adjusting the chunker, the DAG layout etc. However, it will allocate the content and send it directly to the allocated peers (among which may not necessarily be the local ipfs daemon).

Once the adding process is finished, the content is fully added to all allocations and pinned in them. This makes cluster add slower than a local ipfs add, but the result is a fully replicated CID on completion. If you prefer faster adding, add directly to the local IPFS and trigger a cluster "pin add".


**`cluster.add(data, [options], [callback])`**

Where  `data`  may be:

-   a  [`Buffer instance`](https://www.npmjs.com/package/buffer)
-   a  [`Readable Stream`](https://www.npmjs.com/package/readable-stream)
-   a  [`Pull Stream`](https://www.npmjs.com/package/pull-stream)
-   an array of objects, each of the form:
```javascript
{
  path: '/tmp/myfile.txt', // The file path
  content: <data> // A Buffer, Readable Stream or Pull Stream with the contents of the file
}
```
If no `content` is passed, then the path is treated as an empty directory


`options` is an optional object argument that might include the following keys:
-	`replication-min` (int, default: 0):	Sets the minimum replication factor for pinning this file
-	`replication-max` (int, default: 0):	Sets the maximum replication factor for pinning this: file
-	`name` (string, default: ""):	Sets a name for this pin
-	`shard` (bool, default: false)	
-	`shard-size` (int, default: 0)
-	`recursive` (bool, default: false):	Add directory paths recursively
-	`layout` (string, default: false):	Dag layout to use for dag generation: balanced or trickle
-	`chunker` (string, default: "size-262144"):		'size-[size]' or 'rabin-[min]-[avg]-[max]'
-	`raw-leaves` (bool, default: false):	Use raw blocks for leaves
-	`hidden` (bool, default: false):	Include files that are hidden.  Only takes effect on recursive add
-	`wrap-with-directory` (bool, default: false):	Wrap a with a directory object
-	`progress` (bool, default: false)	
-	`cid-version` (int, default: 0)
-	`hash` (string, default: "sha2-256"):	Hash function to use. Implies cid-version=1
-	`stream-channels` (bool, default: true)	
-	`nocopy` (bool, default: false):	Add the URL using filestore. Implies raw-leaves


`callback` must follow `function (err, res) {}` signature, where `err` is an error if the operation was not successful. If successful, `res` will return an object of following form:

```javascript
{
  path: '/path/to/file/foo.txt',
  hash: 'QmRG3FXAW76xD7ZrjCWk8FKVaTRPYdMtwzJHZ9gArzHK5f',
  size: 2417
}
```

If no `callback` is passed, a promise is returned.

### Example
```javascript
cluster.add(Buffer.from("vasa"), (err, result) => {
  err ? console.error(err) : console.log(result)
})
```
### Peer management
> Lists, adds & removes peers from the cluster

#### **`peers`**

#### **`peers.ls`**
> Lists the peers in the cluster
	
This command tells IPFS Cluster to no longer manage a CID. This will trigger unpinning operations in all the IPFS nodes holding the content.

When the request has succeeded, the command returns the status of the CID in the cluster. The CID should disappear from the list offered by "pin ls", although unpinning operations in the cluster may take longer or fail.	

**`cluster.peers.ls([callback])`**
	
`callback` must follow `function (err, res) {}` signature, where `err` is an error if the operation was not successful. If successful, `res` returns a information abount the connected peers in the following form:
```json
[ { "id": "QmPq34QAMCFLNTXWtM3pc7qeQ2kneuCgLZjSVywWoEumRn",
	"addresses":
		[ "/p2p-circuit/ipfs/QmPq34QAMCFLNTXWtM3pc7qeQ2kneuCgLZjSVywWoEumRn",
			"/ip4/127.0.0.1/tcp/9096/ipfs/QmPq34QAMCFLNTXWtM3pc7qeQ2kneuCgLZjSVywWoEumRn",
			"/ip4/10.184.9.134/tcp/9096/ipfs/QmPq34QAMCFLNTXWtM3pc7qeQ2kneuCgLZjSVywWoEumRn",
			"/ip4/172.17.0.1/tcp/9096/ipfs/QmPq34QAMCFLNTXWtM3pc7qeQ2kneuCgLZjSVywWoEumRn",
			"/ip4/172.18.0.1/tcp/9096/ipfs/QmPq34QAMCFLNTXWtM3pc7qeQ2kneuCgLZjSVywWoEumRn" ],
	"cluster_peers": [ "QmPq34QAMCFLNTXWtM3pc7qeQ2kneuCgLZjSVywWoEumRn" ],
	"cluster_peers_addresses": null,
	"version": "0.10.1",
	"commit": "",
	"rpc_protocol_version": "/ipfscluster/0.10/rpc",
	"error": "",
	"ipfs":
		{ "id": "QmdKAFhAAnc6U3ik6XfEDVKEsok7TnQ1yeyXmnnvGFmBhx",
			"addresses": [/*Array*/],
			"error": "" },
	"peername": "jarvis" } ]
```

### Example
```javascript
cluster.peers.ls((err, peers) => {
	err ? console.error(err) : console.log(peers)
})
```

#### **`peers.remove`**
> Removes peer from the cluster

This command removes a peer from the cluster. If the peer is online, it will automatically shut down. All other cluster peers should be online for the operation to succeed, otherwise some nodes may be left with an outdated list of cluster peers.
	
**`cluster.peers.rm(peerid, [callback])`**

Where `peerid` is the `id` of the peer to be removed.
	
`callback` must follow `function (err, res) {}` signature, where `err` is an error if the operation was not successful.

If no `callback` is passed, a promise is returned.

### Example
```javascript
cluster.peers.rm("QmdKAFhAAnc6U3ik6XfEDVKEsok7TnQ1yeyXmnnvGFmBhx", (err) => {
	err ? console.error(err) : console.log("peer removed") 
})
```

### Pins management
> Lists, adds & removes pins from the pinlist of the cluster

#### **`pin`**

#### **`pin.ls`**
> Lists the pins in the pinlist

This command will list the CIDs which are tracked by IPFS Cluster and to which peers they are currently allocated. This list does not include any monitoring information about the IPFS status of the CIDs, it merely represents the list of pins which are part of the shared state of the cluster. For IPFS-status information about the pins, use "status".
	
**`cluster.pin.ls([options], [callback])`**    

`options` is an optional object argument that might include the following keys:
* `filter`: (default: `pin`)  The filter only takes effect when listing all pins. The possible values are:

	- all
	- pin
	- meta-pin
	- clusterdag-pin
	- shard-pin

`callback` must follow `function (err, pins) {}` signature, where `err` is an error if the operation was not successful. If successful, `pins` returns the list of pins.

If no `callback` is passed, a promise is returned.

### Example
	
```javascript
cluster.pin.ls({filter: 'all'}, (err, pins) => {
	err ? console.error(err) : console.log(pins)
})
```

	  

	  

#### **`pin.add`**
> Adds a pin to the cluster
	
This command tells IPFS Cluster to start managing a CID. Depending on the pinning strategy, this will trigger IPFS pin requests. The CID will become part of the Cluster's state and will tracked from this point.

When the request has succeeded, the command returns the status of the CID in the cluster and should be part of the list offered by "pin ls".

An optional replication factor can be provided: -1 means "pin everywhere" and 0 means use cluster's default setting. Positive values indicate how many peers should pin this content.

An optional allocations argument can be provided, allocations should be a comma-separated list of peer IDs on which we want to pin. Peers in allocations are prioritized over automatically-determined ones, but replication factors would stil be respected.
	
**`cluster.pin.add(cid, [options], [callback])`**

Where `cid` is the [CID](https://docs.ipfs.io/guides/concepts/cid/)  of the data to be pinned.

`options` is an optional object argument that might include the following keys:
-	`replication-min`	(int, default: 0):	Sets the minimum replication factor for this pin	
-	`replication-max`	(int, default: 0):	Sets the maximum replication factor for this pin
-	`replication`	(int, default: 0):	Sets a custom replication factor (overrides `replication-min` and `replication-max`)
-	`name`	(int, default: ""):	Sets a name for this pin
-	`user-allocations`: (string array): Optional comma-separated list of peer IDs where data will be pinned
-	`shard_size`	(int, default: 0)

`callback` must follow `function (err) {}` signature, where `err` is an error if the operation was not successful.

If no `callback` is passed, a promise is returned.

### Example
```javascript
cluster.pin.add(CID, (err) => {
	err ? console.error(err) : console.log('pin added')
})
```

   

#### **`pin.remove`**
> Removes a pin from the pinlist

This command tells IPFS Cluster to no longer manage a CID. This will trigger unpinning operations in all the IPFS nodes holding the content.

When the request has succeeded, the command returns the status of the CID in the cluster. The CID should disappear from the list offered by "pin ls", although unpinning operations in the cluster may take longer or fail.

	
	
**`cluster.pin.rm(cid, [callback])`**

Where `cid` is the [CID](https://docs.ipfs.io/guides/concepts/cid/) of the data to be unpinned.

`callback` must follow `function (err) {}` signature, where `err` is an error if the operation was not successful.

If no `callback` is passed, a promise is returned.

### Example
```javascript
const CID = "QmU4xZd9Yj7EzRj5ntw6AJ1VkbWNe1jXRM56KoRLkTxKch"

cluster.pin.rm(CID, (err) => {
	err ? console.error(err) : console.log(`${CID} unpinned`)
})
```



#### Node management
#### **`id`**
> Gets the connected peer's name, address info

This command displays information about the peer that the tool is contacting.

**`cluster.id([callback])`**

`callback` must follow `function (err, id) {}` signature, where `err` is an error if the operation was not successful. If successful, `id` returns the information about the peer that the tool is contacting.

If no `callback` is passed, a promise is returned.

### Example

```javascript
cluster.id((err, id) => {
	err ? console.error(err) : console.log(id)
})
```

#### **`version`**
> Gets the current version of IPFS Cluster version

This command retrieves the IPFS Cluster version and can be used
to check that it matches the CLI version 

**`cluster.version([callback])`**

`callback` must follow `function (err, version) {}` signature, where `err` is an error if the operation was not successful. If successful, `version` will return the IPFS Cluster version.

If no `callback` is passed, a promise is returned.

### Example
```javascript
cluster.version((err, version) => {
	err ? console.error(err) : console.log(version)
})
```

#### **`health`**

#### **`graph`**
> Lists the health graph of the cluster

This command queries all connected cluster peers and their ipfs peers to generate a graph of the connections.  Output is a dot file encoding the cluster's connection state.

*  **`cluster.health.graph([callback])`**

`callback` must follow `function (err, graph) {}` signature, where `err` is an error if the operation was not successful. If successful, `graph` returns the cluster's current state.

If no `callback` is passed, a promise is returned.

#### Example

```javascript
cluster.health.graph((err, health) => {
	err ? console.error(err) : console.log(health)
})
```

#### **`metrics`**
> Lists the health metrics of the cluster

This commands displays the latest valid metrics of the given type logged by this peer for all current cluster peers.

* **`cluster.health.metrics(type, [callback])`**

`type` is the type of the monitoring desired(`freespace` OR `ping`)

`callback` must follow `function (err, metrics) {}` signature, where `err` is an error if the operation was not successful. If successful, `metrics` returns the desired metrics.

If no `callback` is passed, a promise is returned.

### Example

```javascript
cluster.health.metrics('freespace', (err, metrics) => {
	err ? console.error(err) : console.log(metrics)
})
```

####	**`status`**
> Retrieves the status of the CIDs tracked by IPFS Cluster

This command retrieves the status of the CIDs tracked by IPFS Cluster, including which member is pinning them and any errors. If a CID is provided, the status will be only fetched for a single
item. Metadata CIDs are included in the status response

The status of a CID may not be accurate. A manual sync can be triggered with "sync".

When the `local` option is set, it will only fetch the status from the contacted cluster peer. By default, status will be fetched from all peers.

When the `filter` option is set, it will only fetch the peer information where status of the pin matches at least one of the filter values.

**`cluster.status([cid], [options], [callback])`**

Where `cid` is the [CID](https://docs.ipfs.io/guides/concepts/cid/) of the data for which we need the status.

`options` is an optional object argument that might include the following keys:
* `filter`(string): list of filters
  - error
  - cluster_error
  - pin_error
  - pin_queued
  - pinned
  - pinning
  - queued
  - remote
  - unpin_error
  - unpin_queued
  - unpinned
  - unpinning
  
* `local`(boolean): if set `true`, runs operation only on the contacted peer

`callback` must follow `function (err, res) {}` signature, where `err` is an error if the operation was not successful. If successful `res` returns the status of the passed `cid` 

If no `callback` is passed, a promise is returned.

### Example
```javascript
const CID = "QmU4xZd9Yj7EzRj5ntw6AJ1VkbWNe1jXRM56KoRLkTxKch"

cluster.status(CID, { filter:  'pinned', local:  true }, (err, res) => {
	err ? console.error(err) : console.log(res)
})
```

####	**`sync`**
> Syncs the pinset/CID across all the peers in the cluster

This command asks Cluster peers to verify that the current status of tracked CIDs is accurate by triggering queries to the IPFS daemons that pin them. If a CID is provided, the sync and recover operations will be limited to that single item.

Unless providing a specific CID, the command will output only items which have changed status because of the sync or are in error state in some node, therefore, the output should be empty if no operations were performed.

CIDs in error state may be manually recovered with "recover".

When the `local` option is passed, it will only trigger sync operations on the contacted peer. By default, all peers will sync.

**`cluster.sync([cid], [options], [callback])`**

Where `cid` is the [CID](https://docs.ipfs.io/guides/concepts/cid/) of the data to be synced.

`options` is an optional object argument that might include the following keys:
* `local`(boolean): if set `true`, runs operation only on the contacted peer

`callback` must follow `function (err) {}` signature, where `err` is an error if the operation was not successful.

If no `callback` is passed, a promise is returned.

### Example

```javascript
const CID = "QmU4xZd9Yj7EzRj5ntw6AJ1VkbWNe1jXRM56KoRLkTxKch"

cluster.sync(CID, { local:  true }, (err) => {
	err ? console.error(err) : console.log(`${CID} synced`)
})
```

####	**`recover`**
> re-track or re-forget CIDs in error state

This command asks Cluster peers to re-track or re-forget CIDs in error state, usually because the IPFS pin or unpin operation has failed.

The command will wait for any operations to succeed and will return the status of the item upon completion. Note that, when running on the full sets of tracked CIDs (without argument), it may take a considerably long time.

When the `local` option is set, it will only trigger recover operations on the contacted peer (as opposed to on every peer).

For now, ONLY requests with parameter `local=true` are supported


**`cluster.recover([cid], [options], [callback])`**

Where `cid` is the [CID](https://docs.ipfs.io/guides/concepts/cid/) of the data to be recovered.

`options` is an optional object argument that might include the following keys:
* `local`(boolean, default: true): if set `true` it will only trigger recover
operations on the contacted peer

`callback` must follow `function (err) {}` signature, where `err` is an error if the operation was not successful.

If no `callback` is passed, a promise is returned.

### Example
```javascript
const CID = "QmU4xZd9Yj7EzRj5ntw6AJ1VkbWNe1jXRM56KoRLkTxKch"

cluster.recover(CID, { local:  true }, (err) => {
	err ? console.error(err) : console.log(`${CID} recovered`)
})
```

## Development

### Testing
We run tests by executing `npm test` in a terminal window. This will run Node.js tests.

## Contribute

The `ipfs-cluster-api` is a work in progress. As such, there's a few things you can do right now to help out:

- **[Check out the existing issues](https://github.com/cluster-labs/ipfs-cluster-api/issues)**!
- **Perform code reviews**. More eyes will help 
	- speed the project along 
	- ensure quality and
	- reduce possible future bugs.
- **Add tests**. There can never be enough tests.

You can also checkout our **[other projects](https://github.com/cluster-labs)**

It's recommended to follow the [Contribution Guidelines](https://github.com/ipfs/community/blob/master/CONTRIBUTING_JS.md).

## Historical Context

This module started as a direct mapping from the Go `ipfs-cluster-ctl` to a JavaScript implementation.

## License

[MIT](LICENSE)