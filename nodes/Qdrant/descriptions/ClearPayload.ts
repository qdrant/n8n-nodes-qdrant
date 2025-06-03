import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';
import { collectionNameField } from './Commons';

export const clearPayloadOperation: INodePropertyOptions = {
	name: 'Clear Payload',
	value: 'clearPayload',
	action: 'Clear Payload',
	description: 'Removes the entire payload for specified points',
	routing: {
		request: {
			method: 'POST',
			url: '=/collections/{{$parameter.collectionName}}/points/payload/clear',
			body: {
				points: '={{JSON.parse($parameter.points)}}',
				filter: '={{JSON.parse($parameter.filter)}}',
				shard_key: '={{JSON.parse($parameter.shardKey)}}',
			},
			qs: {
				wait: '={{$parameter.wait}}',
				ordering: '={{$parameter.ordering}}',
			},
		},
	},
};

export const clearPayloadFields: INodeProperties[] = [
	collectionNameField('clearPayload'),
	{
		displayName: 'Points',
		name: 'points',
		hint: 'List of point IDs to clear payload from',
		default: '[]',
		type: 'json',
		required: false,
		displayOptions: {
			show: {
				operation: ['clearPayload'],
			},
		},
	},
	{
		displayName: 'Filter',
		name: 'filter',
		hint: 'Filter to select points to clear payload from',
		default: 'null',
		type: 'json',
		required: false,
		displayOptions: {
			show: {
				operation: ['clearPayload'],
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
				operation: ['clearPayload'],
			},
		},
	},
	{
		displayName: 'Wait',
		name: 'wait',
		hint: 'If true, wait for changes to actually happen',
		default: true,
		type: 'boolean',
		required: false,
		displayOptions: {
			show: {
				operation: ['clearPayload'],
			},
		},
	},
	{
		displayName: 'Ordering',
		name: 'ordering',
		hint: 'Define ordering guarantees for the operation',
		type: 'options',
		options: [
			{
				name: 'Weak',
				value: 'weak',
			},
			{
				name: 'Medium',
				value: 'medium',
			},
			{
				name: 'Strong',
				value: 'strong',
			},
		],
		default: 'weak',
		required: false,
		displayOptions: {
			show: {
				operation: ['clearPayload'],
			},
		},
	},
];
