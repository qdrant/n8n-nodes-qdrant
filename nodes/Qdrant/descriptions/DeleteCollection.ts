import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';
import { collectionNameField } from './Commons';

export const deleteCollectionOperation: INodePropertyOptions = {
	name: 'Delete Collection',
	value: 'deleteCollection',
	action: 'Delete Collection',
	description: 'Delete the specified collection',
	routing: {
		request: {
			method: 'DELETE',
			url: '=/collections/{{$parameter.collectionName}}',
		},
	},
};

export const deleteCollectionFields: INodeProperties[] = [collectionNameField('deleteCollection')];
