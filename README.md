![Banner image](https://user-images.githubusercontent.com/10284570/173569848-c624317f-42b1-45a6-ab09-f0ea3c247648.png)

# n8n-nodes-qdrant

This is the official [n8n](https://n8n.io/) node for interfacing with Qdrant.

[Qdrant](http://qdrant.tech) is a vector similarity search engine that provides a production-ready service with a convenient API to store, search, and manage vectors.

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

The node supports the following operations:

### Collection Management

- List Collections - List all collections in the Qdrant instance
- Create Collection - Create a new collection with specified vector parameters
- Get Collection - Get information about a specific collection
- Collection Exists - Check if a collection exists
- Delete Collection - Delete a collection

### Point Operations

- Upsert Points - Insert or update points in a collection
- Retrieve Point - Get a single point by ID
- Retrieve Points - Get multiple points by their IDs
- Delete Points - Remove points from a collection
- Count Points - Count points in a collection with optional filtering
- Scroll Points - Scroll through all points in a collection

### Vector Operations

- Update Vectors - Update vectors for existing points
- Delete Vectors - Remove vectors from points
- Query Points - Search for similar vectors
- Query Batch Points - Perform multiple vector searches in batch
- Query Points Groups - Group search results by payload field
- Matrix Pairs - Calculate distance matrix between pairs of points
- Matrix Offsets - Calculate distance matrix using offsets

### Payload Operations

- Set Payload - Set payload for points
- Overwrite Payload - Replace entire payload for points
- Delete Payload - Remove payload from points
- Clear Payload - Clear all payload fields
- Payload Facets - Get payload field statistics
- Create Payload Index - Create an index for payload fields
- Delete Payload Index - Remove a payload field index

### Batch Operations

- Batch Update Points - Perform multiple operations in a single request

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
