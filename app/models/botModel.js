//Requiring Mongoose
var mongoose = require('mongoose');

//Defining Schema
var botSchema = mongoose.Schema({
   
     name: {
        type: String,
        required: true
     },
     conversation: {
        type:Object,
        required: true
    },
	 createdOn: {
        type: Date,
        default: Date.now
    }
    
});

//Exporting the file
var Bot = module.exports = mongoose.model('bot_coll', botSchema); //Binding schema toConvoCollection


//Module.exports to access theConvo.js file in anyfile using require
//GettingConvo Details
module.exports.getBot = function(callback, limit) {
   Bot.find(callback).limit(limit);
}

//GettingConvo Details ById
module.exports.getBotById = function(id, callback) {
  Bot.find(id, callback);
}

//InsertingConvo Details
module.exports.createBot = function(bot, callback) {
   Bot.create(bot, callback);
}

//UpdatingConvo Details
module.exports.updateBot = function(id,bot, options, callback) {
    var query = {
        _id: id
    };
  
   Bot.findOneAndUpdate(query, bot, options, callback);
}

//DeletingConvo Details
module.exports.removeBot = function(id, callback) {
    var query = {
        _id: id
    };
   Bot.remove(query, callback);
}
