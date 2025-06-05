import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const collectionExistsOperation: INodePropertyOptions = {
	name: 'Check Collection Exists',
	value: 'collectionExists',
	action: 'Check Collection Exists',
	description: 'Check if a collection exists in the Qdrant instance',
	routing: {
		request: {
			method: 'GET',
			url: '=/collections/{{$parameter.collectionName}}/exists',
		},
	},
};

export const collectionExistsFields: INodeProperties[] = [
	{
		displayName: 'Collection Name',
		name: 'collectionName',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['collectionExists'],
			},
		},
		default: '',
		description: 'Name of the collection',
	},
];
