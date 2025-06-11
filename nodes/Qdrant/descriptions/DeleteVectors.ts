import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';
import {
	collectionNameField,
	filterField,
	orderingField,
	pointIdsField,
	shardKeyField,
	waitField,
} from './Commons';

export const deleteVectorsOperation: INodePropertyOptions = {
	name: 'Delete Vectors',
	value: 'deleteVectors',
	action: 'Delete Vectors',
	description: 'Delete specified vectors from points',
	routing: {
		request: {
			method: 'POST',
			url: '=/collections/{{$parameter.collectionName}}/points/vectors/delete',
			body: {
				points: '={{JSON.parse($parameter.points)}}',
				filter: '={{JSON.parse($parameter.filter)}}',
				vector: '={{JSON.parse($parameter.vector)}}',
				shard_key: '={{JSON.parse($parameter.shardKey)}}',
			},
			qs: {
				wait: '={{$parameter.wait}}',
				ordering: '={{$parameter.ordering}}',
			},
		},
	},
};

export const deleteVectorsFields: INodeProperties[] = [
	collectionNameField('deleteVectors'),
	{
		displayName: 'Vector',
		name: 'vector',
		description: 'List of vector names to delete',
		default: '[]',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				operation: ['deleteVectors'],
			},
		},
	},
	pointIdsField('deleteVectors'),
	filterField('deleteVectors'),
	shardKeyField('deleteVectors'),
	waitField('deleteVectors'),
	orderingField('deleteVectors'),
];
