import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';
import { collectionNameField, orderingField } from './Commons';

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
		default: '[]',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				operation: ['upsertPoints'],
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
				operation: ['upsertPoints'],
			},
		},
	},
	orderingField('upsertPoints'),
];
