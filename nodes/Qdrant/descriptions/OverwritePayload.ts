import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';
import {
	collectionNameField,
	filterField,
	orderingField,
	pointIdsField,
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
				key: '={{$parameter.key ? $parameter.key : null}}',
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
		description: 'New payload values to overwrite the existing ones',
		default: '{}',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				operation: ['overwritePayload'],
			},
		},
	},
	pointIdsField('overwritePayload'),
	filterField('overwritePayload'),
	{
		displayName: 'Key',
		name: 'key',
		description: 'Assigns payload to each point that satisfies this path of property',
		default: '',
		type: 'string',
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
