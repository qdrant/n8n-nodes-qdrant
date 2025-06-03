import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';
import { collectionNameField } from './Commons';

export const scrollPointsOperation: INodePropertyOptions = {
	name: 'Scroll Points',
	value: 'scrollPoints',
	action: 'Scroll Points',
	description: 'Returns all points in a page-by-page manner',
	routing: {
		request: {
			method: 'POST',
			url: '=/collections/{{$parameter.collectionName}}/points/scroll',
			body: {
				offset: '={{$parameter.offset}}',
				limit: '={{$parameter.limit}}',
				filter: '={{JSON.parse($parameter.filter)}}',
				with_payload: '={{JSON.parse($parameter.withPayload)}}',
				with_vector: '={{$parameter.withVector}}',
				order_by: '={{JSON.parse($parameter.orderBy)}}',
				shard_key: '={{JSON.parse($parameter.shardKey)}}',
			},
			qs: {
				consistency: '={{$parameter.consistency}}',
				timeout: '={{$parameter.timeout}}',
			},
		},
	},
};

export const scrollPointsFields: INodeProperties[] = [
	collectionNameField('scrollPoints'),
	{
		displayName: 'Offset',
		name: 'offset',
		hint: 'Start ID to read points from',
		default: 'null',
		type: 'json',
		required: false,
		displayOptions: {
			show: {
				operation: ['scrollPoints'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		hint: 'Page size',
		default: 10,
		type: 'number',
		required: false,
		displayOptions: {
			show: {
				operation: ['scrollPoints'],
			},
		},
	},
	{
		displayName: 'Filter',
		name: 'filter',
		hint: 'Look only for points which satisfies these conditions. If not provided - all points',
		default: 'null',
		type: 'json',
		required: false,
		displayOptions: {
			show: {
				operation: ['scrollPoints'],
			},
		},
	},
	{
		displayName: 'With Payload',
		name: 'withPayload',
		hint: 'Select which payload to return with the response. Can be boolean, list of strings, or object',
		default: 'true',
		type: 'json',
		required: false,
		displayOptions: {
			show: {
				operation: ['scrollPoints'],
			},
		},
	},
	{
		displayName: 'With Vector',
		name: 'withVector',
		hint: 'Whether to include vectors in the response',
		default: false,
		type: 'boolean',
		required: false,
		displayOptions: {
			show: {
				operation: ['scrollPoints'],
			},
		},
	},
	{
		displayName: 'Order By',
		name: 'orderBy',
		hint: 'Order the records by a payload field',
		default: 'null',
		type: 'json',
		required: false,
		displayOptions: {
			show: {
				operation: ['scrollPoints'],
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
				operation: ['scrollPoints'],
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
				operation: ['scrollPoints'],
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
				operation: ['scrollPoints'],
			},
		},
	},
];
