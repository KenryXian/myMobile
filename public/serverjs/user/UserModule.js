/**
 * Created by kenry.xian on 14-5-19.
 */
var http = require('http');
var equal = require('assert').equal;
var cookie = require('../comm/Cookie');
var configValue = require("../../../setting");

module.exports.login = function(req, res){
    var reqOption = {
        host: "localhost",
        port: "80",
        method: "post",
        path: "/servlet/Dispatcher?env=wizb&module=trunkinterface.InterfaceModule&cmd=auth&developer_id=MOBILE&method=JSON"
            + "&usr_id=" + req.body.user
            + "&usr_pwd=" + req.body.pwd
            + "&rem_me=" +  req.body.rem_me,
        headers: {
            "Content-Type": 'application/json',
            "Content-Length": 4
        }
    }
    var req = http.request(reqOption, function(feedBack){
        console.log('STATUS: ' + feedBack.statusCode);
        equal(200, feedBack.statusCode);
        feedBack.on("data", function(data){
            var errorMessage = "";
            if(data.login_status=="LGF00"){
                errorMessage = "未知错误!";
            }else if(data.login_status=="LGF01"){
                errorMessage = "用户名不存在!";
            }else if(data.login_status=="LGF04"){
                errorMessage = "密码无效!";
            }
            if(errorMessage != ""){
                res.render('login', { errorMessage: errorMessage });
            }else{
                res.send("login sucess");
            }
        });
    });

    req.on('error', function(e) {
        console.log('problem with request: ' + e.message);
    });
    req.end();
}

exports.checkUser = function(req, res, next){
    var token = "";//cookie.getCookie(configValue.config.user_token_key);
    if(token && token != ""){
        res.send(data + " login sucess");
    }else{
        res.render('login', { errorMessage: errorMessage });
    }
}