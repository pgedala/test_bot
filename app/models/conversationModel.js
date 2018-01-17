//Requiring Mongoose
var mongoose = require('mongoose');

//Defining Schema
var convoSchema = mongoose.Schema({
   
     user: {
        type: String,
        required: true
     },

     channel: {
        type: String,
        required: true
    },
	 ended: {
        type: Boolean,
        required: true
    },
	 abandoned: {
        type: Boolean,
        required: true
    },
	conversation: {
        type: String,
        required: true
    },
	createdOn: {
        type: Date,
        default: Date.now
    }
    
});

//Exporting the file
var Convo = module.exports = mongoose.model('convo_coll', convoSchema); //Binding schema toConvoCollection


//Module.exports to access theConvo.js file in anyfile using require
//GettingConvo Details
module.exports.getConvo = function(callback, limit) {
   Convo.find(callback).limit(limit);
}

//GettingConvo Details ById
module.exports.getConvoById = function(id, callback) {
   Convo.find(id, callback);
}

//InsertingConvo Details
module.exports.createConvo = function(convo, callback) {
   Convo.create(convo, callback);
}

//UpdatingConvo Details
module.exports.updateConvo = function(id,convo, options, callback) {
    var query = {
        _id: id
    };
  
   Convo.findOneAndUpdate(query, convo, options, callback);
}

//DeletingConvo Details
module.exports.removeConvo = function(id, callback) {
    var query = {
        _id: id
    };
   Convo.remove(query, callback);
}
