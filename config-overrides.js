const rewireMobX = require('react-app-rewire-mobx');
const rewirePreact = require('react-app-rewire-preact');
const {injectBabelPlugin} = require('react-app-rewired');
/* config-overrides.js */
module.exports = function override(config, env) {    
  config = rewireMobX(config, env);
  return config;
}