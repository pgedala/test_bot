var mongoose = require('mongoose'),
User = require('../models/loginModel');

//get the user details - by ID
exports.getUser = function(req, res, next){
	
    User.getUserByField({"userid":req.query.userid}, function(err, user) {
		var newUser = User();
		
        if (user.length >0){
			  if(newUser.validPassword(req.query.password, user[0].password) == false){
				 response = {
                "result": "sorry wrong password"
            }
            res.json(response);
			}else{ 
				 response = {
                "result": "Loggin success"
            } 
            res.json(response);
        } 
		
		}else {
          error = {
                "error": "Please check entered ID"
            }
            res.json(error);
        }
    });
};

//create the student details
exports.create = function(req, res){

    User.getUserByField({"userid":req.body.userid}, function(err, user) {
	
		if (user.length >0){
			res.json('user exists already')
		}else {
			
//Calls function in user.js model
var newUser = new User();
  newUser.userid    = req.body.userid;
  newUser.password = newUser.generateHash(req.body.password); 
    User.addUser(newUser, function(err, user) {
        if (user) {
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
        }
		
	})	
};


