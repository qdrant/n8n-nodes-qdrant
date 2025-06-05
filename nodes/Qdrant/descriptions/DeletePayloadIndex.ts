import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';
import { collectionNameField, orderingField, waitField } from './Commons';

export const deletePayloadIndexOperation: INodePropertyOptions = {
	name: 'Delete Payload Index',
	value: 'deletePayloadIndex',
	action: 'Delete Payload Index',
	description: 'Deletes a payload index for a field in the specified collection',
	routing: {
		request: {
			method: 'DELETE',
			url: '=/collections/{{$parameter.collectionName}}/index/{{$parameter.fieldName}}',
			qs: {
				wait: '={{$parameter.wait}}',
				ordering: '={{$parameter.ordering}}',
			},
		},
	},
};

export const deletePayloadIndexFields: INodeProperties[] = [
	collectionNameField('deletePayloadIndex'),
	{
		displayName: 'Field Name',
		name: 'fieldName',
		description: 'Name of the field where to delete the index',
		default: '',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['deletePayloadIndex'],
			},
		},
	},
	waitField('deletePayloadIndex'),
	orderingField('deletePayloadIndex'),
];
