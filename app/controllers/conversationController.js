var mongoose = require('mongoose'),
Convo = require('../models/conversationModel');


//conversation controller 

//get the conersation details
exports.list = function(req, res){
	
//Calls function in conversationModel.js model
   Convo.getConvo(function(err, resp) {
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
	var convo = req.body;
//Calls function in conversationModel.js model
 Convo.createConvo(convo, function(err, convo) {
        if (convo) {
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

  Convo.getConvoById({"user":req.params.conv_id}, function(err, convo) {
        if (convo) {
			console.log(convo);
		//Calls the function from conversationModel.js model
   Convo.removeConvo(convo[0]._id, function(err, resp) {

        if (resp.result.n != 0) {
            response = {
                "result": "Convo Record has been deleted!"
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
	  Convo.getConvoById({"user":req.body.user}, function(err, convo) {
        if (convo) {
			console.log(convo);
		//Calls the function from conversationModel.js model
    Convo.updateConvo(convo[0]._id, req.body, {}, function(err, resp) {
        if (resp) {
          response = {
                "result": "Convo Details have been updated!"
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
console.log(req.params.conv_id);
    Convo.getConvoById({"user":req.params.conv_id}, function(err, resp) {
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
