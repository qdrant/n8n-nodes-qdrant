import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';
import { collectionNameField } from './Commons';

export const queryPointsGroupsOperation: INodePropertyOptions = {
	name: 'Query Points Groups',
	value: 'queryPointsGroups',
	action: 'Query Points Groups',
	description: 'Query points and group results by a specified payload field',
	routing: {
		request: {
			method: 'POST',
			url: '=/collections/{{$parameter.collectionName}}/points/query/groups',
			body: {
				group_by: '={{$parameter.groupBy}}',
				query: '={{JSON.parse($parameter.query)}}',
				using: '={{$parameter.using}}',
				filter: '={{JSON.parse($parameter.filter)}}',
				params: '={{JSON.parse($parameter.params)}}',
				score_threshold: '={{$parameter.scoreThreshold}}',
				with_vector: '={{$parameter.withVector}}',
				with_payload: '={{$parameter.withPayload}}',
				lookup_from: '={{JSON.parse($parameter.lookupFrom)}}',
				group_size: '={{$parameter.groupSize}}',
				limit: '={{$parameter.limit}}',
				with_lookup: '={{JSON.parse($parameter.withLookup)}}',
				prefetch: '={{JSON.parse($parameter.prefetch)}}',
				shard_key: '={{JSON.parse($parameter.shardKey)}}',
			},
			qs: {
				consistency: '={{$parameter.consistency}}',
				timeout: '={{$parameter.timeout}}',
			},
		},
	},
};

export const queryPointsGroupsFields: INodeProperties[] = [
	collectionNameField('queryPointsGroups'),
	{
		displayName: 'Group By',
		name: 'groupBy',
		hint: 'Payload field to group by, must be a string or number field',
		default: '',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['queryPointsGroups'],
			},
		},
	},
	{
		displayName: 'Query',
		name: 'query',
		hint: 'Query to perform. Can be a vector, ID, or complex query object',
		default: 'null',
		type: 'json',
		required: false,
		displayOptions: {
			show: {
				operation: ['queryPointsGroups'],
			},
		},
	},
	{
		displayName: 'Using',
		name: 'using',
		hint: 'Define which vector name to use for querying',
		default: 'null',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				operation: ['queryPointsGroups'],
			},
		},
	},
	{
		displayName: 'Filter',
		name: 'filter',
		hint: 'Filter conditions - return only those points that satisfy the specified conditions',
		default: 'null',
		type: 'json',
		required: false,
		displayOptions: {
			show: {
				operation: ['queryPointsGroups'],
			},
		},
	},
	{
		displayName: 'Params',
		name: 'params',
		hint: 'Search params for when there is no prefetch',
		default: 'null',
		type: 'json',
		required: false,
		displayOptions: {
			show: {
				operation: ['queryPointsGroups'],
			},
		},
	},
	{
		displayName: 'Score Threshold',
		name: 'scoreThreshold',
		hint: 'Return points with scores better than this threshold',
		default: null,
		type: 'number',
		required: false,
		displayOptions: {
			show: {
				operation: ['queryPointsGroups'],
			},
		},
	},
	{
		displayName: 'With Vector',
		name: 'withVector',
		hint: 'Options for specifying which vectors to include into the response',
		default: false,
		type: 'boolean',
		required: false,
		displayOptions: {
			show: {
				operation: ['queryPointsGroups'],
			},
		},
	},
	{
		displayName: 'With Payload',
		name: 'withPayload',
		hint: 'Whether to include payload in the response',
		default: true,
		type: 'boolean',
		required: false,
		displayOptions: {
			show: {
				operation: ['queryPointsGroups'],
			},
		},
	},
	{
		displayName: 'Lookup From',
		name: 'lookupFrom',
		hint: 'The location to use for IDs lookup',
		default: 'null',
		type: 'json',
		required: false,
		displayOptions: {
			show: {
				operation: ['queryPointsGroups'],
			},
		},
	},
	{
		displayName: 'Group Size',
		name: 'groupSize',
		hint: 'Maximum amount of points to return per group',
		default: 3,
		type: 'number',
		required: false,
		displayOptions: {
			show: {
				operation: ['queryPointsGroups'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		hint: 'Maximum amount of groups to return',
		default: 10,
		type: 'number',
		required: false,
		displayOptions: {
			show: {
				operation: ['queryPointsGroups'],
			},
		},
	},
	{
		displayName: 'With Lookup',
		name: 'withLookup',
		hint: 'Look for points in another collection using the group ids',
		default: 'null',
		type: 'json',
		required: false,
		displayOptions: {
			show: {
				operation: ['queryPointsGroups'],
			},
		},
	},
	{
		displayName: 'Prefetch',
		name: 'prefetch',
		hint: 'Sub-requests to perform first. If present, the query will be performed on the results of the prefetch(es)',
		default: 'null',
		type: 'json',
		required: false,
		displayOptions: {
			show: {
				operation: ['queryPointsGroups'],
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
				operation: ['queryPointsGroups'],
			},
		},
	},
	{
		displayName: 'Consistency',
		name: 'consistency',
		hint: 'Define read consistency guarantees for the operation',
		default: 'majority',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				operation: ['queryPointsGroups'],
			},
		},
	},
	{
		displayName: 'Timeout',
		name: 'timeout',
		hint: 'If set, overrides global timeout for this request. Unit is seconds',
		default: 100,
		type: 'number',
		required: false,
		displayOptions: {
			show: {
				operation: ['queryPointsGroups'],
			},
		},
	},
];
