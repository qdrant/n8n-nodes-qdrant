import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';
import {
	collectionNameField,
	filterField,
	shardKeyField,
	consistencyField,
	timeoutField,
} from './Commons';

export const matrixPairsOperation: INodePropertyOptions = {
	name: 'Matrix Pairs',
	value: 'matrixPairs',
	action: 'Matrix Pairs',
	description:
		'Retrieve sparse matrix of pairwise distances between points sampled from the collection',
	routing: {
		request: {
			method: 'POST',
			url: '=/collections/{{$parameter.collectionName}}/points/search/matrix/pairs',
			body: {
				filter: '={{JSON.parse($parameter.filter)}}',
				sample: '={{$parameter.sample}}',
				limit: '={{$parameter.limit}}',
				using: '={{$parameter.using}}',
				shard_key: '={{JSON.parse($parameter.shardKey)}}',
			},
			qs: {
				consistency: '={{$parameter.consistency}}',
				timeout: '={{$parameter.timeout}}',
			},
		},
	},
};

export const matrixPairsFields: INodeProperties[] = [
	collectionNameField('matrixPairs'),
	filterField('matrixPairs'),
	{
		displayName: 'Sample',
		name: 'sample',
		description: 'How many points to select and search within',
		default: 10,
		type: 'number',
		displayOptions: {
			show: {
				operation: ['matrixPairs'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		default: 50,
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				operation: ['matrixPairs'],
			},
		},
	},
	{
		displayName: 'Using',
		name: 'using',
		description: 'Define which vector name to use for querying. If missing, the default vector is used.',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['matrixPairs'],
			},
		},
	},
	shardKeyField('matrixPairs'),
	consistencyField('matrixPairs'),
	timeoutField('matrixPairs'),
];
