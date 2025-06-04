import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';
import { collectionNameField, orderingField, waitField } from './Commons';

export const upsertPointsOperation: INodePropertyOptions = {
	name: 'Upsert Points',
	value: 'upsertPoints',
	action: 'Upsert Points',
	description: 'Insert or update points in a collection',
	routing: {
		request: {
			method: 'PUT',
			url: '=/collections/{{$parameter.collectionName}}/points',
			body: {
				points: '={{JSON.parse($parameter.points)}}',
			},
			qs: {
				wait: '={{$parameter.wait}}',
				ordering: '={{$parameter.ordering}}',
			},
		},
	},
};

export const upsertPointsFields: INodeProperties[] = [
	collectionNameField('upsertPoints'),
	{
		displayName: 'Points',
		name: 'points',
		hint: 'List of points to upsert. Each point should have id, vector, and optional payload',
		default: '[\n    {\n        \"id\": 0,\n        \"payload\": {\n            \"color\": \"red\",\n            \"age\": 32\n        },\n        \"vector\": [\n            0.9,\n            0.1,\n            0.1\n        ]\n    },\n    {\n        \"id\": 1,\n        \"payload\": {\n            \"color\": \"green\",\n            \"age\": 55\n        },\n        \"vector\": [\n            0.1,\n            0.9,\n            0.1\n        ]\n    }\n]',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				operation: ['upsertPoints'],
			},
		},
	},
	waitField('upsertPoints'),
	orderingField('upsertPoints'),
];
