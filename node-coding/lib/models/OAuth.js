(function() {
  var BaseModel, Oauth, clui, http, queryparse, urlparse, util,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  util = require('util');

  http = require('http');

  clui = require('clui');

  urlparse = require('url').parse;

  queryparse = require('querystring').parse;

  BaseModel = require('../BaseModel');

  Oauth = (function(superClass) {
    extend(Oauth, superClass);

    function Oauth() {
      this.get_token = bind(this.get_token, this);
      this.authorize = bind(this.authorize, this);
      return Oauth.__super__.constructor.apply(this, arguments);
    }

    Oauth.prototype.authorize = function(id, secret, port, scope, fn) {
      var countdown, data, i, int, server, url;
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
        url = util.format("https://coding.net/oauth_authorize.html?client_id=%s&redirect_uri=http://localhost:%s/oauth/callback&response_type=code&scope=%s", id, port, scope.join(","));
        console.log(url);
        i = 60;
        int = 0;
        countdown = new clui.Spinner('Close server in ' + i + ' seconds...');
        server = http.createServer((function(_this) {
          return function(req, res) {
            var query;
            url = urlparse(req.url);
            if (url.pathname !== '/oauth/callback') {
              return;
            }
            query = queryparse(url.query);
            data = "<script language=\"javascript\">open(location, '_self').close();</script>";
            res.writeHead(200, {
              'Content-Type': 'text/html',
              'Content-Length': data.length
            });
            res.end(data);
            server.close();
            return _this.get_token(id, secret, query.code, fn);
          };
        })(this));
        server.on('close', (function(_this) {
          return function() {
            clearInterval(int);
            return countdown.stop();
          };
        })(this));
        return server.listen(port, function() {
          countdown.start();
          return int = setInterval((function(_this) {
            return function() {
              i--;
              countdown.message('Close server in ' + i + ' seconds...');
              if (i === 0) {
                return server.close();
              }
            };
          })(this), 1000);
        });
      }
    };

    Oauth.prototype.get_token = function(id, secret, code, fn) {
      if (fn == null) {
        fn = null;
      }
      this.debug("Oauth::token()");
      this.debug(code);
      return this.get(util.format("oauth/access_token?client_id=%s&client_secret=%s&grant_type=authorization_code&code=%s", id, secret, code), (function(_this) {
        return function(data) {
          data.timeout = new Date().getTime() + data.expires_in;
          _this.storage.save("access_token", data);
          if (fn) {
            return fn(data);
          }
        };
      })(this));
    };

    return Oauth;

  })(BaseModel);

  module.exports = function(client) {
    return new Oauth(client);
  };

}).call(this);
