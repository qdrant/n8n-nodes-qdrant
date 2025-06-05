import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';
import {
	collectionNameField,
	filterField,
	shardKeyField,
	consistencyField,
	timeoutField,
} from './Commons';

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
		description: 'Payload key to use for faceting',
		default: '',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['payloadFacets'],
			},
		},
	},
	filterField('payloadFacets'),
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
				operation: ['payloadFacets'],
			},
		},
	},
	{
		displayName: 'Exact',
		name: 'exact',
		description: 'Whether to do a more expensive exact count for each of the values in the facet',
		default: false,
		type: 'boolean',
		displayOptions: {
			show: {
				operation: ['payloadFacets'],
			},
		},
	},
	shardKeyField('payloadFacets'),
	consistencyField('payloadFacets'),
	timeoutField('payloadFacets'),
];
