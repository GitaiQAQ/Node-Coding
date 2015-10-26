(function() {
  var BaseModel, Oauth, clui, http, qs, url, util,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  util = require('util');

  http = require('http');

  url = require('url');

  clui = require('clui');

  qs = require('querystring');

  BaseModel = require('../BaseModel');

  Oauth = (function(superClass) {
    extend(Oauth, superClass);

    function Oauth() {
      this.clean = bind(this.clean, this);
      this.getToken = bind(this.getToken, this);
      this.authorize = bind(this.authorize, this);
      return Oauth.__super__.constructor.apply(this, arguments);
    }


    /*
    
     method   : get
     operationId  : authorize
     description  : OAuth 授权
     path     : id,secret,port,scope
     */

    Oauth.prototype.authorize = function(id, secret, port, scope, fn) {
      var code, countdown, data, i, int, server, url_authorize;
      if (port == null) {
        port = 8001;
      }
      if (scope == null) {
        scope = ["user", "user:email", "notification", "social", "social:tweet", "project", "project:task", "project:depot"];
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Oauth::authorize()");
      data = this.storage.load('access_token');
      if (data != null) {
        if (fn) {
          return fn(data);
        }
      } else {
        url_authorize = url.format({
          "protocol": "https",
          "host": "coding.net",
          "pathname": "/oauth_authorize.html",
          "search": qs.stringify({
            "client_id": id,
            "redirect_uri": url.format({
              "protocol": "http",
              "hostname": "localhost",
              "port": port,
              "pathname": "oauth/callback"
            }),
            "response_type": "code",
            "scope": scope.join(",")
          })
        });
        console.log(url_authorize);
        code = null;
        server = http.createServer((function(_this) {
          return function(req, res) {
            var query, urlObj;
            urlObj = url.parse(req.url);
            if (urlObj.pathname !== '/oauth/callback') {
              return;
            }
            query = qs.parse(urlObj.query);
            data = "<script language=\"javascript\">open(location, '_self').close();</script>";
            res.writeHead(200, {
              'Content-Type': 'text/html',
              'Content-Length': data.length
            });
            res.end(data);
            return code = query.code;
          };
        })(this));
        int = 0;
        i = 60;
        countdown = new clui.Spinner('Close server in ' + i + ' seconds...');
        return server.listen(port, (function(_this) {
          return function() {
            countdown.start();
            return int = setInterval(function() {
              i--;
              countdown.message('Close server in ' + i + ' seconds...');
              if (!i || code) {
                clearInterval(int);
                countdown.stop();
                server.close();
                return _this.getToken(id, secret, code, fn);
              }
            }, 1000);
          };
        })(this));
      }
    };


    /*
    
     method   : get
     operationId  : getToken
     description  : Token 授权
     path     : id, secret, code
     */

    Oauth.prototype.getToken = function(id, secret, code, fn) {
      var params;
      if (fn == null) {
        fn = null;
      }
      this.debug("Oauth::token()");
      this.debug(code);
      params = {
        "client_id": id,
        "client_secret": secret,
        "grant_type": "authorization_code",
        "code": code
      };
      return this.get("oauth/access_token", params, (function(_this) {
        return function(data) {
          if (data && data.access_token) {
            _this.storage.save("access_token", data, {
              "expire": {
                "seconds": data.expires_in
              }
            });
          }
          if (fn) {
            return fn(data);
          }
        };
      })(this));
    };


    /*
    
     method   : get
     operationId  : clean
     description  : 清理 OAuth
     */

    Oauth.prototype.clean = function() {
      this.debug("Oauth::clean()");
      return this.storage.remove("access_token");
    };

    return Oauth;

  })(BaseModel);

  module.exports = function(client) {
    return new Oauth(client);
  };

}).call(this);