import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';
import { collectionNameField, filterField, shardKeyField, timeoutField } from './Commons';

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
	filterField('countPoints'),
	{
		displayName: 'Exact',
		name: 'exact',
		description:
			'Whether tocount exact number of points. If false, count approximate number of points faster. Approximate count might be unreliable during the indexing process',
		default: true,
		type: 'boolean',
		displayOptions: {
			show: {
				operation: ['countPoints'],
			},
		},
	},
	shardKeyField('countPoints'),
	timeoutField('countPoints'),
];
