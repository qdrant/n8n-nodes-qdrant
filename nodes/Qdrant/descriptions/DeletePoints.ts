import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';
import { collectionNameField, orderingField } from './Commons';

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
		hint: 'List of point IDs to delete',
		default: '[]',
		type: 'json',
		required: false,
		displayOptions: {
			show: {
				operation: ['deletePoints'],
			},
		},
	},
	{
		displayName: 'Filter',
		name: 'filter',
		hint: 'Filter to select points to delete',
		default: 'null',
		type: 'json',
		required: false,
		displayOptions: {
			show: {
				operation: ['deletePoints'],
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
				operation: ['deletePoints'],
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
				operation: ['deletePoints'],
			},
		},
	},
	orderingField('deletePoints'),
];
