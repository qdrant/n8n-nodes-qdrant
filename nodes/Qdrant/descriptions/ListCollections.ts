import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const listCollectionsOperation: INodePropertyOptions = {
	name: 'List Collections',
	value: 'listCollections',
	action: 'List Collections',
	description: 'List all collections in the Qdrant instance',
	routing: {
		request: {
			url: '/collections',
		},
	},
};

export const listCollectionsFields: INodeProperties[] = [];
