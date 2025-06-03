import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';
import { collectionNameField } from './Commons';

export const payloadFacetsOperation: INodePropertyOptions = {
	name: 'Payload Facets',
	value: 'payloadFacets',
	action: 'Get Payload Facets',
	description: 'Retrieves facets for the specified payload field',
	routing: {
		request: {
			method: 'POST',
			url: '=/collections/{{$parameter.collectionName}}/facet',
			body: {
				key: '={{$parameter.key}}',
				filter: '={{JSON.parse($parameter.filter)}}',
				limit: '={{$parameter.limit}}',
				exact: '={{$parameter.exact}}',
				shard_key: '={{JSON.parse($parameter.shardKey)}}',
			},
			qs: {
				consistency: '={{$parameter.consistency}}',
				timeout: '={{$parameter.timeout}}',
			},
		},
	},
};

export const payloadFacetsFields: INodeProperties[] = [
	collectionNameField('payloadFacets'),
	{
		displayName: 'Key',
		name: 'key',
		hint: 'Payload key to use for faceting',
		default: '',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['payloadFacets'],
			},
		},
	},
	{
		displayName: 'Filter',
		name: 'filter',
		hint: 'Filter conditions - only consider points that satisfy these conditions',
		default: 'null',
		type: 'json',
		required: false,
		displayOptions: {
			show: {
				operation: ['payloadFacets'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		hint: 'Max number of hits to return',
		default: 10,
		type: 'number',
		required: false,
		displayOptions: {
			show: {
				operation: ['payloadFacets'],
			},
		},
	},
	{
		displayName: 'Exact',
		name: 'exact',
		hint: 'Whether to do a more expensive exact count for each of the values in the facet',
		default: false,
		type: 'boolean',
		required: false,
		displayOptions: {
			show: {
				operation: ['payloadFacets'],
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
				operation: ['payloadFacets'],
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
				operation: ['payloadFacets'],
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
				operation: ['payloadFacets'],
			},
		},
	},
];
