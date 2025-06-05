import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';
import { collectionNameField, consistencyField, timeoutField } from './Commons';

export const queryBatchPointsOperation: INodePropertyOptions = {
	name: 'Query Batch Points',
	value: 'queryBatchPoints',
	action: 'Query Batch Points',
	description: 'Query multiple points in batch using various search methods',
	routing: {
		request: {
			method: 'POST',
			url: '=/collections/{{$parameter.collectionName}}/points/query/batch',
			body: {
				searches: '={{JSON.parse($parameter.searches)}}',
			},
			qs: {
				consistency: '={{$parameter.consistency}}',
				timeout: '={{$parameter.timeout}}',
			},
		},
	},
};

export const queryBatchPointsFields: INodeProperties[] = [
	collectionNameField('queryBatchPoints'),
	{
		displayName: 'Searches',
		name: 'searches',
		description: 'List of search requests to perform in batch. Each request can be a vector search, ID search, or complex query.',
		default: '[]',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				operation: ['queryBatchPoints'],
			},
		},
	},
	consistencyField('queryBatchPoints'),
	timeoutField('queryBatchPoints'),
];
