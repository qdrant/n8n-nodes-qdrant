import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';
import {
	collectionNameField,
	filterField,
	shardKeyField,
	waitField,
	orderingField,
	pointIdsField,
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
	pointIdsField('clearPayload'),
	filterField('clearPayload'),
	shardKeyField('clearPayload'),
	waitField('clearPayload'),
	orderingField('clearPayload'),
];
