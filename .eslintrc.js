const RULES = {
	OFF: "off",
	ERROR: "error",
	WARN: "warn"
}
module.exports = {
	"env": {
		"browser": true,
		"es2021": true,
		"node": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended"
	],
	"overrides": [
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": [
		"react",
		"@typescript-eslint"
	],
	"rules": {
		"indent": [
			RULES.ERROR,
			"tab"
		],
		"semi": [
			RULES.ERROR,
			"never"
		],
		"react/react-in-jsx-scope": RULES.OFF
	}
}
