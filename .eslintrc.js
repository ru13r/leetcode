module.exports = {
	root: true,
	globals: {},
	env: {
		node: true,
		jest: true
	},
	parser: 'babel-eslint',
	parserOptions: {
		'ecmaVersion': 2017,
		'sourceType': 'module'
	},
	rules: {
		'semi': ['error', 'always'],
		'quotes': ['warn', 'single'],
		'no-console': 'off',
		'no-debugger': 'off'
	},
	extends: ['eslint:recommended',]
};
