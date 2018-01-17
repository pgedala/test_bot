var mongoose = require('mongoose'),
Bot = require('../models/botModel');


//conversation controller 

//get the conersation details
exports.list = function(req, res){
	
//Calls function in botmodel.js model
  Bot.getBot(function(err, resp) {
        if (resp) {
           response = {
                "result": resp
            }
			console.log(resp);
            res.json(response);
        } else {
           error = {
                "error": "Sorry retrieve failed"
            }
            res.json(error);
        }
    });
};

//create the converastion details
exports.create = function(req, res){
	var bot = req.body;
	console.log("hai"+JSON.stringify(bot));
//Calls function in conversationModel.js model
Bot.createBot(bot, function(err, bot) {
        if (bot) {
			console.log(bot);
           response = {
                "result": "Data inserted succesfully"
            }
            res.json(response);
        } else {
           error = {
                "error": "Sorry insertion failed"
            }
            res.json(error);
        }
    });
  
  
};

//remove the conversation - by ID
exports.remove = function(req, res){
//Calls the function from conversationModel.js model
console.log("hai");
 Bot.getBotById({"name":req.body.name}, function(err,bot) {
        if (bot) {
			console.log(bot);
		//Calls the function from conversationModel.js model
  Bot.removeBot(bot[0]._id, function(err, resp) {

        if (resp.result.n != 0) {
            response = {
                "result": "Bot has been deleted!"
            }
            res.json(response);
        } else {
            error = {
                "error": "Please check entered ID"
            }
            res.json(error);
        }
    });
        } else {
          error = {
                "error": "Please check entered ID"
            }
            res.json(error);
        }
    });


};

//update the conversation - by ID
exports.update = function(req, res){
	 Bot.getBotById({"user":req.body.user}, function(err,bot) {
        if (bot) {
			console.log(bot);
		//Calls the function from conversationModel.js model
   Bot.updateBot(bot[0]._id, req.body, {}, function(err, resp) {
        if (resp) {
          response = {
                "result": "Bot Details have been updated!"
            }
            res.json(response);
        } else {
          error = {
                "error": "Sorry update failed"
            }
            res.json(error);
        }
    });
		
        } else {
          error = {
                "error": "Please check entered ID"
            }
            res.json(error);
        }
    });

};

//get the conversation details - by ID
exports.listById = function(req, res, next){
//Calls the function from conversationModel.js model
console.log(req.params.bot_id);
   Bot.getBotById({"user":req.params.bot_id}, function(err, resp) {
        if (resp) {
         response = {
                "result": resp
            }
            res.json(response);
        } else {
          error = {
                "error": "Please check entered ID"
            }
            res.json(error);
        }
    });
 // next();
};
