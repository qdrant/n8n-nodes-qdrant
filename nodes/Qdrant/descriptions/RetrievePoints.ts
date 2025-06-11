import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';
import {
	collectionNameField,
	withPayloadField,
	withVectorField,
	shardKeyField,
	consistencyField,
	timeoutField,
	pointIdsField,
} from './Commons';

export const retrievePointsOperation: INodePropertyOptions = {
	name: 'Retrieve Points',
	value: 'retrievePoints',
	action: 'Retrieve Points',
	description: 'Retrieve all details from multiple points',
	routing: {
		request: {
			method: 'POST',
			url: '=/collections/{{$parameter.collectionName}}/points',
			body: {
				ids: '={{JSON.parse($parameter.points)}}',
				with_payload: '={{$parameter.withPayload}}',
				with_vector: '={{$parameter.withVector}}',
				shard_key: '={{JSON.parse($parameter.shardKey)}}',
			},
			qs: {
				consistency: '={{$parameter.consistency}}',
				timeout: '={{$parameter.timeout}}',
			},
		},
	},
};

export const retrievePointsFields: INodeProperties[] = [
	collectionNameField('retrievePoints'),
	pointIdsField('retrievePoints'),
	withPayloadField('retrievePoints'),
	withVectorField('retrievePoints'),
	shardKeyField('retrievePoints'),
	consistencyField('retrievePoints'),
	timeoutField('retrievePoints'),
];
