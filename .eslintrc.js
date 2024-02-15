export default {
	"plugins": [
		"cypress",
		"chai-friendly"
	],
	"env": {
		"cypress/globals": true,
		"browser": true,
		"es2021": true
	},
	"extends": ["eslint:recommended",
		"plugin:cypress/recommended"
	],
	"overrides": [
		{
			"env": {
				"node": true,
			},
			"files": [
				".eslintrc.{js,cjs}"
			],
			"parserOptions": {
				"sourceType": "script"
			}
		}
	],
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"rules": {
		"no-unused-expressions": 0,
		"chai-friendly/no-unused-expressions": 2
	},
	"settings": {
		'import/resolver': {
			"node": {
				"extensions": [
					".js",
					".jsx"
				]
			}
		}
	}
}
