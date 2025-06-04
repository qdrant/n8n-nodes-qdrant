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

export const scrollPointsOperation: INodePropertyOptions = {
	name: 'Scroll Points',
	value: 'scrollPoints',
	action: 'Scroll Points',
	description: 'Returns all points in a page-by-page manner',
	routing: {
		request: {
			method: 'POST',
			url: '=/collections/{{$parameter.collectionName}}/points/scroll',
			body: {
				offset:
					'={{isNaN(Number($parameter.offset)) ?  $parameter.offset : Number($parameter.offset)}}',
				limit: '={{$parameter.limit}}',
				filter: '={{JSON.parse($parameter.filter)}}',
				with_payload: '={{$parameter.withPayload}}',
				with_vector: '={{$parameter.withVector}}',
				order_by: '={{JSON.parse($parameter.orderBy)}}',
				shard_key: '={{JSON.parse($parameter.shardKey)}}',
			},
			qs: {
				consistency: '={{$parameter.consistency}}',
				timeout: '={{$parameter.timeout}}',
			},
		},
	},
};

export const scrollPointsFields: INodeProperties[] = [
	collectionNameField('scrollPoints'),
	{
		displayName: 'Limit',
		name: 'limit',
		hint: 'Page size',
		default: 50,
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				operation: ['scrollPoints'],
			},
		},
	},
	filterField('scrollPoints'),
	withPayloadField('scrollPoints'),
	withVectorField('scrollPoints'),
	{
		displayName: 'Offset',
		name: 'offset',
		hint: 'Start ID to read points from.',
		default: '',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['scrollPoints'],
			},
		},
	},
	{
		displayName: 'Order By',
		name: 'orderBy',
		hint: 'Order the records by a payload field',
		default: 'null',
		type: 'json',
		displayOptions: {
			show: {
				operation: ['scrollPoints'],
			},
		},
	},
	shardKeyField('scrollPoints'),
	consistencyField('scrollPoints'),
	timeoutField('scrollPoints'),
];
