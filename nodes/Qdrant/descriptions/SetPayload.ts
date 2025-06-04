import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';
import {
	collectionNameField,
	filterField,
	orderingField,
	shardKeyField,
	waitField,
} from './Commons';

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
		displayOptions: {
			show: {
				operation: ['setPayload'],
			},
		},
	},
	filterField('setPayload'),
	{
		displayName: 'Key',
		name: 'key',
		hint: 'Assigns payload to each point that satisfy this path of property',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['setPayload'],
			},
		},
	},
	shardKeyField('setPayload'),
	waitField('setPayload'),
	orderingField('setPayload'),
];
