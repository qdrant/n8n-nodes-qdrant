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
	filterField('payloadFacets'),
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
	shardKeyField('payloadFacets'),
	consistencyField('payloadFacets'),
	timeoutField('payloadFacets'),
];
