import { INodeProperties } from 'n8n-workflow';

export const collectionNameField = (showOperation: string): INodeProperties => {
	return {
		displayName: 'Collection Name',
		name: 'collectionName',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: [showOperation],
			},
		},
		default: '',
		hint: 'Name of the collection',
	};
};

export const orderingField = (showOperation: string): INodeProperties => {
	return {
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
				operation: [showOperation],
			},
		},
	};
};
