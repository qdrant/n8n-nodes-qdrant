import {
	IAuthenticateGeneric,
	ICredentialType,
	INodeProperties,
	ICredentialTestRequest,
	Icon,
} from 'n8n-workflow';

export class QdrantApi implements ICredentialType {
	name = 'qdrantApi';
	displayName = 'Qdrant API';
	icon: Icon = 'file:qdrant.svg';
	documentationUrl = 'https://qdrant.tech/documentation/cloud/authentication/';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
			required: true,
		},
		{
			displayName: 'URL',
			name: 'url',
			type: 'string',
			default: 'http://localhost:6333',
			required: true,
			description: 'Qdrant server URL',
		},
	];
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'api-key': '={{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials.url}}',
			method: 'GET',
		},
	};
}
