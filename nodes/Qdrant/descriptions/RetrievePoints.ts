import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';
import { collectionNameField } from './Commons';

export const retrievePointsOperation: INodePropertyOptions = {
	name: 'Retrieve Points',
	value: 'retrievePoints',
	action: 'Retrieve Points',
	description: 'Retrieve all details from multiple points',
	routing: {
		request: {
			method: 'POST',
			url: '=/collections/{{$parameter.collectionName}}/points',
			body: {
				ids: '={{JSON.parse($parameter.ids)}}',
				with_payload: '={{$parameter.withPayload}}',
				with_vector: '={{$parameter.withVector}}',
				shard_key: '={{JSON.parse($parameter.shardKey)}}',
			},
			qs: {
				consistency: '={{$parameter.consistency}}',
				timeout: '={{$parameter.timeout}}',
			},
		},
	},
};

export const retrievePointsFields: INodeProperties[] = [
	collectionNameField('retrievePoints'),
	{
		displayName: 'IDs',
		name: 'ids',
		hint: 'List of point IDs to retrieve',
		default: '[]',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				operation: ['retrievePoints'],
			},
		},
	},
	{
		displayName: 'With Payload',
		name: 'withPayload',
		hint: 'Whether to include payload in the response',
		default: true,
		type: 'boolean',
		required: false,
		displayOptions: {
			show: {
				operation: ['retrievePoints'],
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
				operation: ['retrievePoints'],
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
				operation: ['retrievePoints'],
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
				operation: ['retrievePoints'],
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
				operation: ['retrievePoints'],
			},
		},
	},
];
