import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';
import {
	collectionNameField,
	consistencyField,
	filterField,
	shardKeyField,
	timeoutField,
	withPayloadField,
	withVectorField,
} from './Commons';

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
		description: 'Payload field to group by, must be a string or number field',
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
		description: 'Query to perform. Can be a vector, ID, or complex query object.',
		default: 'null',
		type: 'json',
		displayOptions: {
			show: {
				operation: ['queryPointsGroups'],
			},
		},
	},
	{
		displayName: 'Using',
		name: 'using',
		description: 'Define which vector name to use for querying',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['queryPointsGroups'],
			},
		},
	},
	filterField('queryPointsGroups'),
	{
		displayName: 'Params',
		name: 'params',
		description: 'Search params for when there is no prefetch',
		default: 'null',
		type: 'json',
		displayOptions: {
			show: {
				operation: ['queryPointsGroups'],
			},
		},
	},
	{
		displayName: 'Score Threshold',
		name: 'scoreThreshold',
		description: 'Return points with scores better than this threshold',
		default: null,
		type: 'number',
		displayOptions: {
			show: {
				operation: ['queryPointsGroups'],
			},
		},
	},
	withVectorField('queryPointsGroups'),
	withPayloadField('queryPointsGroups'),
	{
		displayName: 'Lookup From',
		name: 'lookupFrom',
		description: 'The location to use for IDs lookup',
		default: 'null',
		type: 'json',
		displayOptions: {
			show: {
				operation: ['queryPointsGroups'],
			},
		},
	},
	{
		displayName: 'Group Size',
		name: 'groupSize',
		description: 'Maximum amount of points to return per group',
		default: 3,
		type: 'number',
		displayOptions: {
			show: {
				operation: ['queryPointsGroups'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		default: 50,
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				operation: ['queryPointsGroups'],
			},
		},
	},
	{
		displayName: 'With Lookup',
		name: 'withLookup',
		description: 'Look for points in another collection using the group IDs',
		default: 'null',
		type: 'json',
		displayOptions: {
			show: {
				operation: ['queryPointsGroups'],
			},
		},
	},
	{
		displayName: 'Prefetch',
		name: 'prefetch',
		description:
			'Sub-requests to perform first. If present, the query will be performed on the results of the prefetch(es).',
		default: 'null',
		type: 'json',
		displayOptions: {
			show: {
				operation: ['queryPointsGroups'],
			},
		},
	},
	shardKeyField('queryPointsGroups'),
	consistencyField('queryPointsGroups'),
	timeoutField('queryPointsGroups'),
];
