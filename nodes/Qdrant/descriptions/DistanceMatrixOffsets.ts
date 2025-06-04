import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';
import {
	collectionNameField,
	filterField,
	shardKeyField,
	consistencyField,
	timeoutField,
} from './Commons';

export const matrixOffsetsOperation: INodePropertyOptions = {
	name: 'Matrix Offsets',
	value: 'matrixOffsets',
	action: 'Matrix Offsets',
	description:
		'Retrieve sparse matrix of pairwise distances between points sampled from the collection',
	routing: {
		request: {
			method: 'POST',
			url: '=/collections/{{$parameter.collectionName}}/points/search/matrix/offsets',
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

export const matrixOffsetsFields: INodeProperties[] = [
	collectionNameField('matrixOffsets'),
	filterField('matrixOffsets'),
	{
		displayName: 'Sample',
		name: 'sample',
		hint: 'How many points to select and search within',
		default: 10,
		type: 'number',
		displayOptions: {
			show: {
				operation: ['matrixOffsets'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		hint: 'How many neighbours per sample to find',
		default: 50,
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				operation: ['matrixOffsets'],
			},
		},
	},
	{
		displayName: 'Using',
		name: 'using',
		hint: 'Define which vector name to use for querying. If missing, the default vector is used',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['matrixOffsets'],
			},
		},
	},
	shardKeyField('matrixOffsets'),
	consistencyField('matrixOffsets'),
	timeoutField('matrixOffsets'),
];
