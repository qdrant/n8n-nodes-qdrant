import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';
import { collectionNameField, orderingField, waitField } from './Commons';

export const batchUpdatePointsOperation: INodePropertyOptions = {
	name: 'Batch Update Points',
	value: 'batchUpdatePoints',
	action: 'Batch Update Points',
	description: 'Batch update points, including their respective vectors and payloads',
	routing: {
		request: {
			method: 'POST',
			url: '=/collections/{{$parameter.collectionName}}/points/batch',
			body: {
				operations: '={{JSON.parse($parameter.operations)}}',
			},
			qs: {
				wait: '={{$parameter.wait}}',
				ordering: '={{$parameter.ordering}}',
			},
		},
	},
};

export const batchUpdatePointsFields: INodeProperties[] = [
	collectionNameField('batchUpdatePoints'),
	{
		displayName: 'Operations',
		name: 'operations',
		description:
			'List of operations to perform. Can include upsert, update_vectors, set_payload, delete_payload, delete_vectors, and clear_payload operations.',
		default: '[]',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				operation: ['batchUpdatePoints'],
			},
		},
	},
	waitField('batchUpdatePoints'),
	orderingField('batchUpdatePoints'),
];
