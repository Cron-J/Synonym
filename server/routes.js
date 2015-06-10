// Load modules

var Synonym = require('./controller/synonym'),
  	Static    = require('./static');

// API Server Endpoints
exports.endpoints = [
  	{ method: 'GET',  path: '/{somethingss*}', config: Static.get },
  	{ method: 'GET', path: '/getSynonyms', config: Synonym.getSynonym },
	{ method: 'POST', path: '/createSynonyms', config: Synonym.createSynonym },
	{ method: 'PUT', path: '/updateSynonyms', config: Synonym.updateSynonym }
];