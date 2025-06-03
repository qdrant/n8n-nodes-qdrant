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
