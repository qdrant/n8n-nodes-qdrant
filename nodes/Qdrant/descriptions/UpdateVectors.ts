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
		description: 'List of points with their vectors to update. Each point should have ID and vector(s).',
		default: "[\n    {\n        \"id\": 0,\n        \"vector\": [\n            0.9,\n            0.1,\n            0.1\n        ]\n    },\n    {\n        \"id\": 1,\n        \"vector\": [\n            0.1,\n            0.9,\n            0.1\n        ]\n    }\n]",
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
