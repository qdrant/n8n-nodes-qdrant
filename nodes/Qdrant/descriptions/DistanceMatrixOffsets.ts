import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';
import { collectionNameField } from './Commons';

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
	{
		displayName: 'Filter',
		name: 'filter',
		hint: 'Look only for points which satisfies these conditions',
		default: 'null',
		type: 'json',
		required: false,
		displayOptions: {
			show: {
				operation: ['matrixOffsets'],
			},
		},
	},
	{
		displayName: 'Sample',
		name: 'sample',
		hint: 'How many points to select and search within',
		default: 10,
		type: 'number',
		required: false,
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
		default: 3,
		type: 'number',
		required: false,
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
		default: 'null',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				operation: ['matrixOffsets'],
			},
		},
	},
	{
		displayName: 'Shard Key',
		name: 'shardKey',
		hint: 'Specify in which shards to look for the points, if not specified - look in all shards',
		default: 'null',
		type: 'json',
		required: false,
		displayOptions: {
			show: {
				operation: ['matrixOffsets'],
			},
		},
	},
	{
		displayName: 'Consistency',
		name: 'consistency',
		hint: 'Define read consistency guarantees for the operation',
		default: 'majority',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				operation: ['matrixOffsets'],
			},
		},
	},
	{
		displayName: 'Timeout',
		name: 'timeout',
		hint: 'If set, overrides global timeout for this request. Unit is seconds',
		default: 100,
		type: 'number',
		required: false,
		displayOptions: {
			show: {
				operation: ['matrixOffsets'],
			},
		},
	},
];
