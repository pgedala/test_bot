module.exports = function(app, router){
	
var loginController = require("../controllers/loginController.js");
var conversationController = require("../controllers/conversationController.js");

  app.route('/login')
 .get(loginController.getUser);
 
  app.route('/insertUser')
  .post(loginController.create);
  
  app.route('/conversation')
  .get(conversationController.list)
  .post(conversationController.create)
  .put(conversationController.update);
  
  app.route('/conversation/:conv_id')
  .get(conversationController.listById)
  .delete(conversationController.remove);
  
}
