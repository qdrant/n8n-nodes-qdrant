import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';
import { collectionNameField } from './Commons';

export const createCollectionOperation: INodePropertyOptions = {
	name: 'Create Collection',
	value: 'createCollection',
	action: 'Create Collection',
	description: 'Create a new collection in the Qdrant instance',
	routing: {
		request: {
			method: 'PUT',
			url: '=/collections/{{$parameter.collectionName}}',
			body: {
				vectors: '={{JSON.parse($parameter.vectors)}}',
				shard_number: '={{$parameter.shardNumber}}',
				sharding_method: '={{$parameter.shardingMethod}}',
				replication_factor: '={{$parameter.replicationFactor}}',
				write_consistency_factor: '={{$parameter.writeConsistencyFactor}}',
				on_disk_payload: '={{$parameter.onDiskPayload}}',
				hnsw_config: '={{JSON.parse($parameter.hnswConfig)}}',
				wal_config: '={{JSON.parse($parameter.walConfig)}}',
				optimizers_config: '={{JSON.parse($parameter.optimizersConfig)}}',
				init_from: '={{JSON.parse($parameter.initFrom)}}',
				quantization_config: '={{JSON.parse($parameter.quantizationConfig)}}',
				sparse_vectors: '={{JSON.parse($parameter.sparseVectors)}}',
				strict_mode_config: '={{JSON.parse($parameter.strictModeConfig)}}',
			},
		},
	},
};

export const createCollectionFields: INodeProperties[] = [
	collectionNameField('createCollection'),
	{
		displayName: 'Vectors',
		name: 'vectors',
		description: 'Vector parameters of the collection',
		default: '{}',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				operation: ['createCollection'],
			},
		},
	},
	{
		displayName: 'Shard Number',
		name: 'shardNumber',
		description: 'Number of shards in collection',
		default: null,
		type: 'number',
		displayOptions: {
			show: {
				operation: ['createCollection'],
			},
		},
	},
	{
		displayName: 'Sharding Method',
		name: 'shardingMethod',
		description: 'Sharding method to use. "auto" or "custom". Defaults to "auto"',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['createCollection'],
			},
		},
	},
	{
		displayName: 'Replication Factor',
		name: 'replicationFactor',
		description: 'Number of shards replicas. Default is 1 Minimum is 1.',
		default: null,
		type: 'number',
		displayOptions: {
			show: {
				operation: ['createCollection'],
			},
		},
	},
	{
		displayName: 'Write Consistency Factor',
		name: 'writeConsistencyFactor',
		description:
			'Defines how many replicas should apply the operation for us to consider it successful',
		default: null,
		type: 'number',
		displayOptions: {
			show: {
				operation: ['createCollection'],
			},
		},
	},
	{
		displayName: 'On Disk Payload',
		name: 'onDiskPayload',
		description:
			'Whether to store point’s payload on disk. It will be read from the disk every time it is requested.',
		default: false,
		type: 'boolean',
		displayOptions: {
			show: {
				operation: ['createCollection'],
			},
		},
	},
	{
		displayName: 'HNSW Config',
		name: 'hnswConfig',
		description: 'Custom params for HNSW index',
		default: 'null',
		type: 'json',
		displayOptions: {
			show: {
				operation: ['createCollection'],
			},
		},
	},
	{
		displayName: 'WAL Config',
		name: 'walConfig',
		description: 'Custom params for WAL',
		default: 'null',
		type: 'json',
		displayOptions: {
			show: {
				operation: ['createCollection'],
			},
		},
	},
	{
		displayName: 'Optimizers Config',
		name: 'optimizersConfig',
		description: 'Custom params for Optimizers',
		default: 'null',
		type: 'json',
		displayOptions: {
			show: {
				operation: ['createCollection'],
			},
		},
	},
	{
		displayName: 'Init From',
		name: 'initFrom',
		description: 'Specify other collection to copy data from',
		default: 'null',
		type: 'json',
		displayOptions: {
			show: {
				operation: ['createCollection'],
			},
		},
	},
	{
		displayName: 'Quantization Config',
		name: 'quantizationConfig',
		description: 'Quantization parameters. If none - quantization is disabled.',
		default: 'null',
		type: 'json',
		displayOptions: {
			show: {
				operation: ['createCollection'],
			},
		},
	},
	{
		displayName: 'Sparse Vectors',
		name: 'sparseVectors',
		description: 'Sparse vector parameters of the collection',
		default: 'null',
		type: 'json',
		displayOptions: {
			show: {
				operation: ['createCollection'],
			},
		},
	},
	{
		displayName: 'Strict Mode Config',
		name: 'strictModeConfig',
		description: 'Strict mode configuration of the collection',
		default: 'null',
		type: 'json',
		displayOptions: {
			show: {
				operation: ['createCollection'],
			},
		},
	},
];
