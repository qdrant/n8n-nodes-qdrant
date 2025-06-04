import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';
import {
	collectionNameField,
	filterField,
	shardKeyField,
	waitField,
	orderingField,
} from './Commons';

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
		displayOptions: {
			show: {
				operation: ['clearPayload'],
			},
		},
	},
	filterField('clearPayload'),
	shardKeyField('clearPayload'),
	waitField('clearPayload'),
	orderingField('clearPayload'),
];
