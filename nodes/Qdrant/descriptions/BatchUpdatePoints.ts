import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';
import { collectionNameField } from './Commons';

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
		hint: 'List of operations to perform. Can include upsert, update_vectors, set_payload, delete_payload, delete_vectors, and clear_payload operations',
		default: '[]',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				operation: ['batchUpdatePoints'],
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
				operation: ['batchUpdatePoints'],
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
				operation: ['batchUpdatePoints'],
			},
		},
	},
];
