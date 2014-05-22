/**
 * cookie 操作方式
 * Created by Kenry.xian on 14-5-19.
 */
//添加cookie
exports.addCookie = function(key, value, expHours, path){
    var cookieValue = key + "=" + value;
    if(expHours){
        var date = new Date();
        date.setTime(date.getTime + expHours * 3600 * 1000);
        cookieValue += cookieValue + "; expires=" + date.toGMTString();
    }
    if(path){
        cookieValue += "; path="+path;
    }
    document.cookie = cookieValue;
}

//获取cookie
exports.getCookie = function(key){
    var cookieValue = document.cookie;
    var arrCookie = cookieValue.split(";");
    for(var i = 0; i < arrCookie.length; i++){
        var arrValue = arrCookie[i].split("=");
        if(arrValue[0] == key){
            return arrValue[1];
        }
    }
}

//移除cookie
exports.moveCookie = function(key, value, path){
    moveCookie(key, value, -1, path);
}