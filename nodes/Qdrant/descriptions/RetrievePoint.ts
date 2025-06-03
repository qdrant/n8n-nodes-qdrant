import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';
import { collectionNameField } from './Commons';

export const retrievePointOperation: INodePropertyOptions = {
	name: 'Retrieve Point',
	value: 'retrievePoint',
	action: 'Retrieve Point',
	description: 'Retrieves all details from a single point',
	routing: {
		request: {
			method: 'GET',
			url: '=/collections/{{$parameter.collectionName}}/points/{{isNaN(Number($parameter.id)) ?  $parameter.id : Number($parameter.id)}}',
		},
	},
};

export const retrievePointFields: INodeProperties[] = [
	collectionNameField('retrievePoint'),
	{
		displayName: 'Point ID',
		name: 'id',
		hint: 'ID of the point',
		default: '',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['retrievePoint'],
			},
		},
	},
];
