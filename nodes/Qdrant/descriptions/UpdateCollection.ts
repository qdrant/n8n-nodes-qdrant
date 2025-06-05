import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';
import { collectionNameField } from './Commons';

export const updateCollectionOperation: INodePropertyOptions = {
	name: 'Update Collection',
	value: 'updateCollection',
	action: 'Update Collection',
	description: 'Update parameters of an existing collection in the Qdrant instance',
	routing: {
		request: {
			method: 'PATCH',
			url: '=/collections/{{$parameter.collectionName}}',
			body: {
				vectors: '={{JSON.parse($parameter.vectors)}}',
				optimizers_config: '={{JSON.parse($parameter.optimizersConfig)}}',
				params: '={{JSON.parse($parameter.params)}}',
				hnsw_config: '={{JSON.parse($parameter.hnswConfig)}}',
				quantization_config: '={{JSON.parse($parameter.quantizationConfig)}}',
				sparse_vectors: '={{JSON.parse($parameter.sparseVectors)}}',
				strict_mode_config: '={{JSON.parse($parameter.strictModeConfig)}}',
			},
		},
	},
};

export const updateCollectionFields: INodeProperties[] = [
	collectionNameField('updateCollection'),
	{
		displayName: 'Vectors',
		name: 'vectors',
		description: 'Vector parameters to update for each named vector',
		default: 'null',
		type: 'json',
		displayOptions: {
			show: {
				operation: ['updateCollection'],
			},
		},
	},
	{
		displayName: 'Optimizers Config',
		name: 'optimizersConfig',
		description: 'Custom params for Optimizers. If none - it is left unchanged.',
		default: 'null',
		type: 'json',
		displayOptions: {
			show: {
				operation: ['updateCollection'],
			},
		},
	},
	{
		displayName: 'Params',
		name: 'params',
		description: 'Collection base params. If none - it is left unchanged.',
		default: 'null',
		type: 'json',
		displayOptions: {
			show: {
				operation: ['updateCollection'],
			},
		},
	},
	{
		displayName: 'HNSW Config',
		name: 'hnswConfig',
		description: 'HNSW parameters to update for the collection index. If none - it is left unchanged.',
		default: 'null',
		type: 'json',
		displayOptions: {
			show: {
				operation: ['updateCollection'],
			},
		},
	},
	{
		displayName: 'Quantization Config',
		name: 'quantizationConfig',
		description: 'Quantization parameters to update. If none - it is left unchanged.',
		default: 'null',
		type: 'json',
		displayOptions: {
			show: {
				operation: ['updateCollection'],
			},
		},
	},
	{
		displayName: 'Sparse Vectors',
		name: 'sparseVectors',
		description: 'Sparse vector parameters to update for each sparse vector',
		default: 'null',
		type: 'json',
		displayOptions: {
			show: {
				operation: ['updateCollection'],
			},
		},
	},
	{
		displayName: 'Strict Mode Config',
		name: 'strictModeConfig',
		description: 'Strict mode configuration to update',
		default: 'null',
		type: 'json',
		displayOptions: {
			show: {
				operation: ['updateCollection'],
			},
		},
	},
]; 