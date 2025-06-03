import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';
import { collectionNameField } from './Commons';

export const updateVectorsOperation: INodePropertyOptions = {
	name: 'Update Vectors',
	value: 'updateVectors',
	action: 'Update Vectors',
	description: 'Update specified vectors on points',
	routing: {
		request: {
			method: 'PUT',
			url: '=/collections/{{$parameter.collectionName}}/points/vectors',
			body: {
				points: '={{JSON.parse($parameter.points)}}',
				shard_key: '={{JSON.parse($parameter.shardKey)}}',
			},
			qs: {
				wait: '={{$parameter.wait}}',
				ordering: '={{$parameter.ordering}}',
			},
		},
	},
};

export const updateVectorsFields: INodeProperties[] = [
	collectionNameField('updateVectors'),
	{
		displayName: 'Points',
		name: 'points',
		hint: 'List of points with their vectors to update. Each point should have id and vector(s)',
		default: '[]',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				operation: ['updateVectors'],
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
				operation: ['updateVectors'],
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
				operation: ['updateVectors'],
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
				operation: ['updateVectors'],
			},
		},
	},
];
