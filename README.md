# n8n-nodes-qdrant

![Banner image](https://user-images.githubusercontent.com/10284570/173569848-c624317f-42b1-45a6-ab09-f0ea3c247648.png)

This is the official [n8n](https://n8n.io/) node for interfacing with Qdrant.

[Qdrant](http://qdrant.tech) is a vector similarity search engine that provides a production-ready service with a convenient API to store, search, and manage vectors.

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

The node supports the following operations:

### Collection

- [List Collections](https://api.qdrant.tech/v-1-14-x/api-reference/collections/get-collections) - List all collections in the Qdrant instance
- [Create Collection](https://api.qdrant.tech/v-1-14-x/api-reference/collections/create-collection) - Create a new collection with specified vector parameters
- [Update Collection](https://api.qdrant.tech/v-1-14-x/api-reference/collections/update-collection) - Update parameters of an existing collection
- [Get Collection](https://api.qdrant.tech/v-1-14-x/api-reference/collections/get-collection) - Get information about a specific collection
- [Collection Exists](https://api.qdrant.tech/v-1-14-x/api-reference/collections/collection-exists) - Check if a collection exists
- [Delete Collection](https://api.qdrant.tech/v-1-14-x/api-reference/collections/delete-collection) - Delete a collection

### Point

- [Upsert Points](https://api.qdrant.tech/v-1-14-x/api-reference/points/upsert-points) - Insert or update points in a collection
- [Retrieve Point](https://api.qdrant.tech/v-1-14-x/api-reference/points/get-point) - Get a single point by ID
- [Retrieve Points](https://api.qdrant.tech/v-1-14-x/api-reference/points/get-points) - Get multiple points by their IDs
- [Delete Points](https://api.qdrant.tech/v-1-14-x/api-reference/points/delete-points) - Remove points from a collection
- [Count Points](https://api.qdrant.tech/v-1-14-x/api-reference/points/count-points) - Count points in a collection with optional filtering
- [Scroll Points](https://api.qdrant.tech/v-1-14-x/api-reference/points/scroll-points) - Scroll through all points in a collection
- [Batch Update Points](https://api.qdrant.tech/v-1-14-x/api-reference/points/batch-update) - Perform multiple point operations in a single request

### Vector

- [Update Vectors](https://api.qdrant.tech/v-1-14-x/api-reference/points/update-vectors) - Update vectors for existing points
- [Delete Vectors](https://api.qdrant.tech/v-1-14-x/api-reference/points/delete-vectors) - Remove vectors from points

### Search

- [Query Points](https://api.qdrant.tech/v-1-14-x/api-reference/search/query-points) - Search for similar vectors
- [Query Points In Batch](https://api.qdrant.tech/v-1-14-x/api-reference/search/query-batch-points) - Perform multiple vector searches in batch
- [Query Points Groups](https://api.qdrant.tech/v-1-14-x/api-reference/search/query-points-groups) - Group search results by payload field
- [Matrix Pairs](https://api.qdrant.tech/v-1-14-x/api-reference/search/matrix-pairs) - Calculate distance matrix between pairs of points
- [Matrix Offsets](https://api.qdrant.tech/v-1-14-x/api-reference/search/matrix-offsets) - Calculate distance matrix using offsets

### Payload

- [Set Payload](https://api.qdrant.tech/v-1-14-x/api-reference/points/set-payload) - Set payload for points
- [Overwrite Payload](https://api.qdrant.tech/v-1-14-x/api-reference/points/overwrite-payload) - Replace entire payload for points
- [Delete Payload](https://api.qdrant.tech/v-1-14-x/api-reference/points/delete-payload) - Remove payload from points
- [Clear Payload](https://api.qdrant.tech/v-1-14-x/api-reference/points/clear-payload) - Clear all payload fields
- [Payload Facets](https://api.qdrant.tech/v-1-14-x/api-reference/points/facet) - Get payload field statistics
- [Create Payload Index](https://api.qdrant.tech/v-1-14-x/api-reference/indexes/create-field-index) - Create an index for payload fields
- [Delete Payload Index](https://api.qdrant.tech/v-1-14-x/api-reference/indexes/delete-field-index) - Remove a payload field index

## Credentials

To use this node, you need to set up Qdrant credentials:

- URL: The REST URL of your Qdrant instance
- API Key (optional): Your Qdrant API key if authentication is enabled

## Compatibility

This node is compatible with:

- Qdrant version 1.14.0 and above

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)
- [Qdrant Documentation](https://qdrant.tech/documentation/)
- [Qdrant GitHub Repository](https://github.com/qdrant/qdrant)
