
/*
 * GET home page.
 */
var user = require('../public/serverjs/user/UserModule.js');
var userRoute = require('../routes/userRoute');
module.exports = function(app){
//   app.get("/", user.checkUser);
   userRoute(app);
};