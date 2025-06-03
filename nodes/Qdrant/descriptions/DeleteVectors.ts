import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';
import { collectionNameField, orderingField } from './Commons';

export const deleteVectorsOperation: INodePropertyOptions = {
	name: 'Delete Vectors',
	value: 'deleteVectors',
	action: 'Delete Vectors',
	description: 'Delete specified vectors from points',
	routing: {
		request: {
			method: 'POST',
			url: '=/collections/{{$parameter.collectionName}}/points/vectors/delete',
			body: {
				points: '={{JSON.parse($parameter.points)}}',
				filter: '={{JSON.parse($parameter.filter)}}',
				vector: '={{JSON.parse($parameter.vector)}}',
				shard_key: '={{JSON.parse($parameter.shardKey)}}',
			},
			qs: {
				wait: '={{$parameter.wait}}',
				ordering: '={{$parameter.ordering}}',
			},
		},
	},
};

export const deleteVectorsFields: INodeProperties[] = [
	collectionNameField('deleteVectors'),
	{
		displayName: 'Vector',
		name: 'vector',
		hint: 'List of vector names to delete',
		default: '[]',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				operation: ['deleteVectors'],
			},
		},
	},
	{
		displayName: 'Points',
		name: 'points',
		hint: 'List of point IDs to delete vectors from',
		default: '[]',
		type: 'json',
		required: false,
		displayOptions: {
			show: {
				operation: ['deleteVectors'],
			},
		},
	},
	{
		displayName: 'Filter',
		name: 'filter',
		hint: 'Filter to select points to delete vectors from',
		default: 'null',
		type: 'json',
		required: false,
		displayOptions: {
			show: {
				operation: ['deleteVectors'],
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
				operation: ['deleteVectors'],
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
				operation: ['deleteVectors'],
			},
		},
	},
	orderingField('deleteVectors'),
];
