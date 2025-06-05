import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';
import {
	collectionNameField,
	filterField,
	shardKeyField,
	waitField,
	orderingField,
} from './Commons';

export const deletePointsOperation: INodePropertyOptions = {
	name: 'Delete Points',
	value: 'deletePoints',
	action: 'Delete Points',
	description: 'Delete specified points from the collection',
	routing: {
		request: {
			method: 'POST',
			url: '=/collections/{{$parameter.collectionName}}/points/delete',
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

export const deletePointsFields: INodeProperties[] = [
	collectionNameField('deletePoints'),
	{
		displayName: 'Points',
		name: 'points',
		description: 'List of point IDs to delete',
		default: '[]',
		type: 'json',
		displayOptions: {
			show: {
				operation: ['deletePoints'],
			},
		},
	},
	filterField('deletePoints'),
	shardKeyField('deletePoints'),
	waitField('deletePoints'),
	orderingField('deletePoints'),
];
