import { INodeProperties } from 'n8n-workflow';

export const collectionNameField = (showOperation: string): INodeProperties => {
	return {
		displayName: 'Collection Name',
		description: 'Name of the collection',
		name: 'collectionName',
		type: 'resourceLocator',
		default: { mode: 'list', value: null },
		displayOptions: {
			show: {
				operation: [showOperation],
			},
		},
		modes: [
			{
				displayName: 'From List',
				name: 'list',
				type: 'list',
				typeOptions: {
					searchListMethod: 'listCollections',
					searchable: true,
				},
			},
			{
				displayName: 'By Name',
				name: 'name',
				type: 'string',
			},
		],
		required: true,
	};
};

export const orderingField = (showOperation: string): INodeProperties => {
	return {
		displayName: 'Ordering',
		name: 'ordering',
		description: 'Defines ordering guarantees for the operation',
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
		displayOptions: {
			show: {
				operation: [showOperation],
			},
		},
	};
};

export const filterField = (showOperation: string): INodeProperties => {
	return {
		displayName: 'Filter',
		name: 'filter',
		description: 'Only select points which satisfies these conditions',
		default: 'null',
		type: 'json',
		displayOptions: {
			show: {
				operation: [showOperation],
			},
		},
	};
};

export const withPayloadField = (showOperation: string): INodeProperties => {
	return {
		displayName: 'With Payload',
		name: 'withPayload',
		description: 'Whether to include payload in the response',
		default: true,
		type: 'boolean',
		displayOptions: {
			show: {
				operation: [showOperation],
			},
		},
	};
};

export const withVectorField = (showOperation: string): INodeProperties => {
	return {
		displayName: 'With Vector',
		name: 'withVector',
		description: 'Whether to include vectors in the response',
		default: false,
		type: 'boolean',
		displayOptions: {
			show: {
				operation: [showOperation],
			},
		},
	};
};

export const shardKeyField = (showOperation: string): INodeProperties => {
	return {
		displayName: 'Shard Key',
		name: 'shardKey',
		description:
			'Specify in which shards to look for the points, if not specified - look in all shards',
		default: 'null',
		type: 'json',
		displayOptions: {
			show: {
				operation: [showOperation],
			},
		},
	};
};

export const consistencyField = (showOperation: string): INodeProperties => {
	return {
		displayName: 'Consistency',
		name: 'consistency',
		description: 'Define read consistency guarantees for the operation',
		type: 'options',
		options: [
			{
				name: 'Majority',
				value: 'majority',
			},
			{
				name: 'Quorum',
				value: 'quorum',
			},
			{
				name: 'All',
				value: 'all',
			},
		],
		default: 'majority',
		displayOptions: {
			show: {
				operation: [showOperation],
			},
		},
	};
};

export const timeoutField = (showOperation: string): INodeProperties => {
	return {
		displayName: 'Timeout',
		name: 'timeout',
		description: 'If set, overrides global timeout for this request. Unit is seconds.',
		default: 100,
		type: 'number',
		displayOptions: {
			show: {
				operation: [showOperation],
			},
		},
	};
};

export const waitField = (showOperation: string): INodeProperties => {
	return {
		displayName: 'Wait',
		name: 'wait',
		description: 'Whether towait for changes to actually happen',
		default: true,
		type: 'boolean',
		displayOptions: {
			show: {
				operation: [showOperation],
			},
		},
	};
};
