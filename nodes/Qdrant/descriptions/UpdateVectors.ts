import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';
import { collectionNameField, orderingField, shardKeyField, waitField } from './Commons';

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
	shardKeyField('updateVectors'),
	waitField('updateVectors'),
	orderingField('updateVectors'),
];
