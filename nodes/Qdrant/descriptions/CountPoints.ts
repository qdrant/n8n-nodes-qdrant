import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';
import { collectionNameField } from './Commons';

export const countPointsOperation: INodePropertyOptions = {
	name: 'Count Points',
	value: 'countPoints',
	action: 'Count Points',
	description: 'Counts the number of points that match a specified filtering condition',
	routing: {
		request: {
			method: 'POST',
			url: '=/collections/{{$parameter.collectionName}}/points/count',
			body: {
				filter: '={{JSON.parse($parameter.filter)}}',
				exact: '={{$parameter.exact}}',
				shard_key: '={{JSON.parse($parameter.shardKey)}}',
			},
			qs: {
				timeout: '={{$parameter.timeout}}',
			},
		},
	},
};

export const countPointsFields: INodeProperties[] = [
	collectionNameField('countPoints'),
	{
		displayName: 'Filter',
		name: 'filter',
		hint: 'Look only for points which satisfies these conditions',
		default: 'null',
		type: 'json',
		required: false,
		displayOptions: {
			show: {
				operation: ['countPoints'],
			},
		},
	},
	{
		displayName: 'Exact',
		name: 'exact',
		hint: 'If true, count exact number of points. If false, count approximate number of points faster. Approximate count might be unreliable during the indexing process',
		default: true,
		type: 'boolean',
		required: false,
		displayOptions: {
			show: {
				operation: ['countPoints'],
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
				operation: ['countPoints'],
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
				operation: ['countPoints'],
			},
		},
	},
];
