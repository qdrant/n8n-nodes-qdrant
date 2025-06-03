import { INodeProperties, INodePropertyOptions } from 'n8n-workflow';
import { collectionNameField } from './Commons';

export const getCollectionOperation: INodePropertyOptions = {
	name: 'Get Collection',
	value: 'getCollection',
	action: 'Get Collection',
	description: 'Get details of a specific collection',
	routing: {
		request: {
			method: 'GET',
			url: '=/collections/{{$parameter.collectionName}}',
		},
	},
};

export const getCollectionFields: INodeProperties[] = [collectionNameField('getCollection')];
