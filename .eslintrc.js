/**
 * @type {import('@types/eslint').ESLint.ConfigData}
 */
module.exports = {
	root: true,

	env: {
		browser: true,
		es6: true,
		node: true,
	},

	parser: '@typescript-eslint/parser',

	parserOptions: {
		project: ['./tsconfig.json'],
		sourceType: 'module',
		extraFileExtensions: ['.json'],
	},

	ignorePatterns: ['.eslintrc.js', '**/*.js', '**/node_modules/**', '**/dist/**'],

	overrides: [
		{
			files: ['package.json'],
			plugins: ['eslint-plugin-n8n-nodes-base'],
			extends: ['plugin:n8n-nodes-base/community'],
			rules: {
				'n8n-nodes-base/community-package-json-name-still-default': 'off',
			},
		},
		{
			files: ['./credentials/**/*.ts'],
			plugins: ['eslint-plugin-n8n-nodes-base'],
			extends: ['plugin:n8n-nodes-base/credentials'],
			rules: {
				'n8n-nodes-base/cred-class-field-documentation-url-missing': 'off',
				'n8n-nodes-base/cred-class-field-documentation-url-miscased': 'off',
			},
		},
		{
			files: ['./nodes/**/*.ts'],
			plugins: ['eslint-plugin-n8n-nodes-base'],
			extends: ['plugin:n8n-nodes-base/nodes'],
		},
	],
};
