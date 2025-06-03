import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';
import { collectionNameField } from './Commons';

export const setPayloadOperation: INodePropertyOptions = {
	name: 'Set Payload',
	value: 'setPayload',
	action: 'Set Payload',
	description: 'Sets payload values for specified points',
	routing: {
		request: {
			method: 'POST',
			url: '=/collections/{{$parameter.collectionName}}/points/payload',
			body: {
				payload: '={{JSON.parse($parameter.payload)}}',
				points: '={{JSON.parse($parameter.points)}}',
				filter: '={{JSON.parse($parameter.filter)}}',
				shard_key: '={{JSON.parse($parameter.shardKey)}}',
				key: '={{$parameter.key}}',
			},
			qs: {
				wait: '={{$parameter.wait}}',
				ordering: '={{$parameter.ordering}}',
			},
		},
	},
};

export const setPayloadFields: INodeProperties[] = [
	collectionNameField('setPayload'),
	{
		displayName: 'Payload',
		name: 'payload',
		hint: 'Payload values to set for the points',
		default: '{}',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				operation: ['setPayload'],
			},
		},
	},
	{
		displayName: 'Points',
		name: 'points',
		hint: 'List of point IDs to set payload for',
		default: '[]',
		type: 'json',
		required: false,
		displayOptions: {
			show: {
				operation: ['setPayload'],
			},
		},
	},
	{
		displayName: 'Filter',
		name: 'filter',
		hint: 'Filter to select points to set payload for',
		default: 'null',
		type: 'json',
		required: false,
		displayOptions: {
			show: {
				operation: ['setPayload'],
			},
		},
	},
	{
		displayName: 'Key',
		name: 'key',
		hint: 'Assigns payload to each point that satisfy this path of property',
		default: '',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				operation: ['setPayload'],
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
				operation: ['setPayload'],
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
				operation: ['setPayload'],
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
				operation: ['setPayload'],
			},
		},
	},
];
