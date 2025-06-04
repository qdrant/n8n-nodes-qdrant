import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';
import {
	collectionNameField,
	filterField,
	orderingField,
	shardKeyField,
	waitField,
} from './Commons';

export const deletePayloadOperation: INodePropertyOptions = {
	name: 'Delete Payload',
	value: 'deletePayload',
	action: 'Delete Payload',
	description: 'Deletes specified payload keys from points',
	routing: {
		request: {
			method: 'POST',
			url: '=/collections/{{$parameter.collectionName}}/points/payload/delete',
			body: {
				keys: '={{JSON.parse($parameter.keys)}}',
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

export const deletePayloadFields: INodeProperties[] = [
	collectionNameField('deletePayload'),
	{
		displayName: 'Keys',
		name: 'keys',
		hint: 'List of payload keys to remove from payload',
		default: '[]',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				operation: ['deletePayload'],
			},
		},
	},
	{
		displayName: 'Points',
		name: 'points',
		hint: 'List of point IDs to delete payload keys from',
		default: '[]',
		type: 'json',
		required: false,
		displayOptions: {
			show: {
				operation: ['deletePayload'],
			},
		},
	},
	filterField('deletePayload'),
	shardKeyField('deletePayload'),
	waitField('deletePayload'),
	orderingField('deletePayload'),
];
