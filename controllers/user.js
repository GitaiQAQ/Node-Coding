var url = require('url'),
    util = require('util'),
    request = require('request'),
    prompt = require('prompt'),
    config = require('../config.js')()
api = require('../api.js')();

exports.test = function test() {
    console.log("test")
}

exports.login = function login() {
	var method = api.user.doLoginUsingPOST.method;
    var url = api.user.doLoginUsingPOST.url;
    request
        .get({
        	method: method,
            uri: url
        }, function(err, res, body) {
            if (!err && res.statusCode == 200) {
                console.log(body)
            }
        })
}
