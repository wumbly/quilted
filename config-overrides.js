/* config-overrides.js */

const rewireTypescript = require('react-app-rewire-typescript');

module.exports = function override(config, env) {
	//do stuff with the webpack config...
	config = rewireTypescript(config, env);
	return config;
};
