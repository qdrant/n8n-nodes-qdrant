/* eslint-disable n8n-nodes-base/node-param-operation-option-action-miscased */
import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';
import {
	deleteCollectionOperation,
	retrievePointOperation,
	retrievePointFields,
	deleteCollectionFields,
	listCollectionsOperation,
	getCollectionOperation,
	getCollectionFields,
	listCollectionsFields,
	collectionExistsOperation,
	collectionExistsFields,
	createCollectionOperation,
	createCollectionFields,
	updateCollectionOperation,
	updateCollectionFields,
	queryPointsOperation,
	queryPointsFields,
	queryBatchPointsOperation,
	queryBatchPointsFields,
	queryPointsGroupsOperation,
	queryPointsGroupsFields,
	matrixPairsOperation,
	matrixPairsFields,
	matrixOffsetsOperation,
	matrixOffsetsFields,
	retrievePointsOperation,
	retrievePointsFields,
	upsertPointsOperation,
	upsertPointsFields,
	deletePointsOperation,
	deletePointsFields,
	updateVectorsOperation,
	updateVectorsFields,
	deleteVectorsOperation,
	deleteVectorsFields,
	setPayloadOperation,
	setPayloadFields,
	overwritePayloadOperation,
	overwritePayloadFields,
	deletePayloadOperation,
	deletePayloadFields,
	clearPayloadOperation,
	clearPayloadFields,
	batchUpdatePointsOperation,
	batchUpdatePointsFields,
	scrollPointsOperation,
	scrollPointsFields,
	countPointsOperation,
	countPointsFields,
	payloadFacetsOperation,
	payloadFacetsFields,
	createPayloadIndexOperation,
	createPayloadIndexFields,
	deletePayloadIndexOperation,
	deletePayloadIndexFields,
} from './descriptions';

const inputs = [NodeConnectionType.Main];
const outputs = [NodeConnectionType.Main];

export class Qdrant implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Qdrant',
		name: 'qdrant',
		icon: 'file:qdrant.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"]}}',
		description: 'Official n8n node to interface with the Qdrant - https://qdrant.tech',
		defaults: {
			name: 'Qdrant',
		},
		usableAsTool: true,
		inputs,
		outputs,
		credentials: [
			{
				name: 'qdrantApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{$credentials.url}}',
			headers: {
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Batch',
						value: 'batch',
					},
					{
						name: 'Collection',
						value: 'collection',
					},
					{
						name: 'Payload',
						value: 'payload',
					},
					{
						name: 'Point',
						value: 'point',
					},
					{
						name: 'Search',
						value: 'search',
					},
					{
						name: 'Vector',
						value: 'vector',
					},
				],
				default: 'collection',
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['collection'],
					},
				},
				options: [
					listCollectionsOperation,
					createCollectionOperation,
					updateCollectionOperation,
					getCollectionOperation,
					collectionExistsOperation,
					deleteCollectionOperation,
				],
				default: '',
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['point'],
					},
				},
				options: [
					upsertPointsOperation,
					retrievePointOperation,
					retrievePointsOperation,
					deletePointsOperation,
					countPointsOperation,
					scrollPointsOperation,
					batchUpdatePointsOperation,
				],
				default: '',
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['vector'],
					},
				},
				options: [
					updateVectorsOperation,
					deleteVectorsOperation,
				],
				default: '',
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['payload'],
					},
				},
				options: [
					setPayloadOperation,
					overwritePayloadOperation,
					deletePayloadOperation,
					clearPayloadOperation,
					payloadFacetsOperation,
					createPayloadIndexOperation,
					deletePayloadIndexOperation,
				],
				default: '',
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['search'],
					},
				},
				options: [
					queryPointsOperation,
					queryBatchPointsOperation,
					queryPointsGroupsOperation,
					matrixPairsOperation,
					matrixOffsetsOperation,
				],
				default: '',
			},
			// Collection Fields
			...listCollectionsFields,
			...createCollectionFields,
			...updateCollectionFields,
			...getCollectionFields,
			...collectionExistsFields,
			...deleteCollectionFields,
			// Point Fields
			...upsertPointsFields,
			...retrievePointFields,
			...retrievePointsFields,
			...deletePointsFields,
			...countPointsFields,
			...scrollPointsFields,
			...batchUpdatePointsFields,
			// Vector Fields
			...updateVectorsFields,
			...deleteVectorsFields,
			// Payload Fields
			...setPayloadFields,
			...overwritePayloadFields,
			...deletePayloadFields,
			...clearPayloadFields,
			...payloadFacetsFields,
			...createPayloadIndexFields,
			...deletePayloadIndexFields,
			// Search Fields
			...queryPointsFields,
			...queryBatchPointsFields,
			...queryPointsGroupsFields,
			...matrixPairsFields,
			...matrixOffsetsFields,
		],
	};
}
