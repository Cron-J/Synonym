'use strict';

var mongoose = require('../config/db').Mongoose,
    Schema = mongoose.Schema,
    validator = require('mongoose-validators');

var SynonymSchema = new Schema({

    originalWord: {
        type: String,
        unique: true,
        sparse: true,
        required: true
    },

    synonyms: [{
        type: String
    }]   

});

SynonymSchema.statics.createSynonym = function(synonym, callback) {
    this.create(synonym, callback);
};

SynonymSchema.statics.getSynonyms = function(callback) {
    this.find({}, callback);
};

SynonymSchema.statics.updateSynonym = function(originalWord, synonym, callback) {
    this.update({
        'originalWord': originalWord
    }, synonym, callback);
};

// export
var synonym = mongoose.model('synonym', SynonymSchema);

/** export schema */
module.exports = {
    Synonym: synonym
};