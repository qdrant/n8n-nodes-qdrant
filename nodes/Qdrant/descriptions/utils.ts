import { ILoadOptionsFunctions, INodeListSearchItems, INodeListSearchResult } from 'n8n-workflow';

interface Collection {
	name: string;
}

interface Result {
	collections: Collection[];
}

interface QdrantCollectionsResponse {
	result: Result;
}

export const listSearch = {
	async listCollections(this: ILoadOptionsFunctions): Promise<INodeListSearchResult> {
		try {
			const creds = await this.getCredentials('qdrantRestApi');

			const response = (await this.helpers.httpRequest.call(this, {
				method: 'GET',
				baseURL: creds.url as string,
				url: 'collections',
				headers: {
					'api-key': creds.apiKey as string,
				},
			})) as QdrantCollectionsResponse;

			if (!response || !response.result || !Array.isArray(response.result.collections)) {
				throw new Error('Invalid response from the Qdrant API');
			}

			const collections: INodeListSearchItems[] = response.result.collections.map((collection) => ({
				name: collection.name,
				value: collection.name,
			}));

			return {
				results: collections,
			};
		} catch (error) {
			throw new Error(`Failed to list collections: ${error.message}`);
		}
	},
};
