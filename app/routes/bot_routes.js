module.exports = function(app, router){

var botcontroller = require("../controllers/botController.js");

   app.route('/bot')
  .get(botcontroller.list)
  .post(botcontroller.create)
  .put(botcontroller.update);
  
  app.route('/bot/:bot_id')
  .get(botcontroller.listById)
  .delete(botcontroller.remove);
  
}
