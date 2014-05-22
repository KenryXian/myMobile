
/*
 * GET users listing.
 */
var http = require('http');
var equal = require('assert').equal;
var userModule = require('../public/serverjs/user/UserModule');

module.exports = function(app){
    app.get("/login", function(req, res){
        res.render('login', { errorMessage: "" });
    });

    app.post("/login", function(req, res){
        userModule.login(req, res);
    });
}