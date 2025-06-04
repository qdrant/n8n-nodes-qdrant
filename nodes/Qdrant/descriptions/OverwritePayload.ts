import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';
import {
	collectionNameField,
	filterField,
	orderingField,
	shardKeyField,
	waitField,
} from './Commons';

export const overwritePayloadOperation: INodePropertyOptions = {
	name: 'Overwrite Payload',
	value: 'overwritePayload',
	action: 'Overwrite Payload',
	description: 'Replaces the entire payload of specified points with a new payload',
	routing: {
		request: {
			method: 'PUT',
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

export const overwritePayloadFields: INodeProperties[] = [
	collectionNameField('overwritePayload'),
	{
		displayName: 'Payload',
		name: 'payload',
		hint: 'New payload values to overwrite the existing ones',
		default: '{}',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				operation: ['overwritePayload'],
			},
		},
	},
	{
		displayName: 'Points',
		name: 'points',
		hint: 'List of point IDs to overwrite payload for',
		default: '[]',
		type: 'json',
		required: false,
		displayOptions: {
			show: {
				operation: ['overwritePayload'],
			},
		},
	},
	filterField('overwritePayload'),
	{
		displayName: 'Key',
		name: 'key',
		hint: 'Assigns payload to each point that satisfy this path of property',
		default: 'null',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				operation: ['overwritePayload'],
			},
		},
	},
	shardKeyField('overwritePayload'),
	waitField('overwritePayload'),
	orderingField('overwritePayload'),
];
