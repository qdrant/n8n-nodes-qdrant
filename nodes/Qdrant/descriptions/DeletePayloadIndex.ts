import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';
import { collectionNameField } from './Commons';

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
		hint: 'Name of the field where to delete the index',
		default: '',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['deletePayloadIndex'],
			},
		},
	},
	{
		displayName: 'Wait',
		name: 'wait',
		hint: 'If true, wait for changes to actually happen',
		default: true,
		type: 'boolean',
		required: false,
		displayOptions: {
			show: {
				operation: ['deletePayloadIndex'],
			},
		},
	},
	{
		displayName: 'Ordering',
		name: 'ordering',
		hint: 'Define ordering guarantees for the operation',
		type: 'options',
		options: [
			{
				name: 'Weak',
				value: 'weak',
			},
			{
				name: 'Medium',
				value: 'medium',
			},
			{
				name: 'Strong',
				value: 'strong',
			},
		],
		default: 'weak',
		required: false,
		displayOptions: {
			show: {
				operation: ['deletePayloadIndex'],
			},
		},
	},
];
