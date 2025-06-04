import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';
import { collectionNameField, orderingField, waitField } from './Commons';

export const createPayloadIndexOperation: INodePropertyOptions = {
	name: 'Create Payload Index',
	value: 'createPayloadIndex',
	action: 'Create Payload Index',
	description: 'Creates a payload index for a field in the specified collection',
	routing: {
		request: {
			method: 'PUT',
			url: '=/collections/{{$parameter.collectionName}}/index',
			body: {
				field_name: '={{$parameter.fieldName}}',
				field_schema: '={{JSON.parse($parameter.fieldSchema)}}',
			},
			qs: {
				wait: '={{$parameter.wait}}',
				ordering: '={{$parameter.ordering}}',
			},
		},
	},
};

export const createPayloadIndexFields: INodeProperties[] = [
	collectionNameField('createPayloadIndex'),
	{
		displayName: 'Field Name',
		name: 'fieldName',
		hint: 'Name of the field to create index for',
		default: '',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['createPayloadIndex'],
			},
		},
	},
	{
		displayName: 'Field Schema',
		name: 'fieldSchema',
		hint: 'Schema of the field to create index for.',
		default: '{}',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				operation: ['createPayloadIndex'],
			},
		},
	},
	waitField('createPayloadIndex'),
	orderingField('createPayloadIndex'),
];
