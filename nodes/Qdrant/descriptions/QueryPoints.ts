import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';
import {
	collectionNameField,
	filterField,
	withPayloadField,
	withVectorField,
	shardKeyField,
	consistencyField,
	timeoutField,
} from './Commons';

export const queryPointsOperation: INodePropertyOptions = {
	name: 'Query Points',
	value: 'queryPoints',
	action: 'Query Points',
	description: 'Query points in a collection using various search methods',
	routing: {
		request: {
			method: 'POST',
			url: '=/collections/{{$parameter.collectionName}}/points/query',
			body: {
				prefetch: '={{JSON.parse($parameter.prefetch)}}',
				query: '={{JSON.parse($parameter.query)}}',
				using: '={{$parameter.using}}',
				filter: '={{JSON.parse($parameter.filter)}}',
				params: '={{JSON.parse($parameter.params)}}',
				score_threshold: '={{$parameter.scoreThreshold}}',
				limit: '={{$parameter.limit}}',
				offset: '={{$parameter.offset}}',
				with_vector: '={{$parameter.withVector}}',
				with_payload: '={{$parameter.withPayload}}',
				lookup_from: '={{JSON.parse($parameter.lookupFrom)}}',
				shard_key: '={{JSON.parse($parameter.shardKey)}}',
			},
			qs: {
				consistency: '={{$parameter.consistency}}',
				timeout: '={{$parameter.timeout}}',
			},
		},
	},
};

export const queryPointsFields: INodeProperties[] = [
	collectionNameField('queryPoints'),
	{
		displayName: 'Query',
		name: 'query',
		description: 'Query to perform. Can be a vector, ID, or complex query object (recommend, fusion, sample, formula).',
		default: '{}',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				operation: ['queryPoints'],
			},
		},
	},
	{
		displayName: 'Score Threshold',
		name: 'scoreThreshold',
		description: 'Return points with scores better than this threshold',
		default: 0,
		type: 'number',
		displayOptions: {
			show: {
				operation: ['queryPoints'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		description: 'Max number of results to return',
		default: 50,
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		displayOptions: {
			show: {
				operation: ['queryPoints'],
			},
		},
	},
	{
		displayName: 'Offset',
		name: 'offset',
		description: 'Offset of the result. Skip this many points.',
		default: 0,
		type: 'number',
		displayOptions: {
			show: {
				operation: ['queryPoints'],
			},
		},
	},
	withVectorField('queryPoints'),
	withPayloadField('queryPoints'),
	{
		displayName: 'Using',
		name: 'using',
		description: 'Define which vector name to use for querying',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['queryPoints'],
			},
		},
	},
	filterField('queryPoints'),
	{
		displayName: 'Prefetch',
		name: 'prefetch',
		description: 'Sub-requests to perform first. If present, the query will be performed on the results of the prefetch(es).',
		default: 'null',
		type: 'json',
		displayOptions: {
			show: {
				operation: ['queryPoints'],
			},
		},
	},
	{
		displayName: 'Params',
		name: 'params',
		description: 'Search params for when there is no prefetch',
		default: 'null',
		type: 'json',
		displayOptions: {
			show: {
				operation: ['queryPoints'],
			},
		},
	},
	{
		displayName: 'Lookup From',
		name: 'lookupFrom',
		description: 'The location to use for IDs lookup',
		default: 'null',
		type: 'json',
		displayOptions: {
			show: {
				operation: ['queryPoints'],
			},
		},
	},
	consistencyField('queryPoints'),
	timeoutField('queryPoints'),
	shardKeyField('queryPoints'),
];
