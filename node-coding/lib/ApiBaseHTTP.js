(function() {
  var ApiBase, cache, debug, fileCache, fs, querystring, slumber,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  debug = require('debug')('coding:ApiBaseHTTP');

  ApiBase = require('./ApiBase').ApiBase;

  querystring = require('querystring');

  cache = require('cache-storage');

  fileCache = require('cache-storage/Storage/FileSyncStorage');

  slumber = require('slumber');

  fs = require('fs');

  module.exports.ApiBaseHTTP = (function(superClass) {
    extend(ApiBaseHTTP, superClass);

    function ApiBaseHTTP() {
      this.patch = bind(this.patch, this);
      this.put = bind(this.put, this);
      this.post = bind(this.post, this);
      this["delete"] = bind(this["delete"], this);
      this.get = bind(this.get, this);
      this.fn_wrapper = bind(this.fn_wrapper, this);
      this.prepare_opts = bind(this.prepare_opts, this);
      this.init = bind(this.init, this);
      this.handleOptions = bind(this.handleOptions, this);
      return ApiBaseHTTP.__super__.constructor.apply(this, arguments);
    }

    ApiBaseHTTP.prototype.handleOptions = function() {
      var base, base1, base2, data;
      ApiBaseHTTP.__super__.handleOptions.apply(this, arguments);
      if ((base = this.options).base_url == null) {
        base.base_url = '';
      }
      if (!this.options.url) {
        throw "`url` is mandatory";
      }
      if (!this.options.cache) {
        throw "`cache dir` is mandatory";
      }
      if (!fs.existsSync(this.options.cache)) {
        throw new Error('FileStorage: directory ' + this.options.cache + ' does not exists');
      }
      if (!fs.statSync(this.options.cache).isDirectory()) {
        throw new Error('FileStorage: path ' + this.options.cache + ' must be directory');
      }
      this.storage = new cache(new fileCache(this.options.cache), 'coding');
      if (!this.options.token) {
        data = this.storage.load('access_token');
        if (data && data.access_token && new Date().getTime() < data.timeout) {
          this.options.token = data.access_token;
        }
      }
      if ((base1 = this.options).slumber == null) {
        base1.slumber = {};
      }
      if ((base2 = this.options.slumber).append_slash == null) {
        base2.append_slash = false;
      }
      this.options.url = this.options.url.replace(/\/api/, '');
      if (this.options.auth != null) {
        this.options.slumber.auth = this.options.auth;
      }
      return debug("handleOptions()");
    };

    ApiBaseHTTP.prototype.init = function() {
      var api;
      ApiBaseHTTP.__super__.init.apply(this, arguments);
      api = slumber.API(this.options.url, this.options.slumber);
      return this.slumber = api(this.options.base_url);
    };

    ApiBaseHTTP.prototype.prepare_opts = function(opts) {
      if (opts.__query == null) {
        opts.__query = {};
      }
      opts['access_token'] = this.options.token;
      return opts;
    };

    ApiBaseHTTP.prototype.fn_wrapper = function(fn) {
      return (function(_this) {
        return function(err, response, ret) {
          var arity;
          arity = fn.length;
          switch (arity) {
            case 1:
              return fn(ret);
            case 2:
              return fn(err, ret || JSON.parse(response.body).message);
            case 3:
              return fn(err, response, ret);
          }
        };
      })(this);
    };

    ApiBaseHTTP.prototype.get = function(path, query, fn) {
      var opts;
      if (query == null) {
        query = {};
      }
      if (fn == null) {
        fn = null;
      }
      if ('function' === typeof query) {
        fn = query;
        query = {};
      }
      opts = this.prepare_opts(query);
      debug(path);
      return this.slumber(path).get(opts, this.fn_wrapper(fn));
    };

    ApiBaseHTTP.prototype["delete"] = function(path, fn) {
      var opts;
      if (fn == null) {
        fn = null;
      }
      opts = this.prepare_opts({});
      debug(path);
      return this.slumber(path)["delete"](opts, this.fn_wrapper(fn));
    };

    ApiBaseHTTP.prototype.post = function(path, data, fn) {
      var opts;
      if (data == null) {
        data = {};
      }
      if (fn == null) {
        fn = null;
      }
      opts = this.prepare_opts(data);
      debug(path);
      return this.slumber(path).post(opts, this.fn_wrapper(fn));
    };

    ApiBaseHTTP.prototype.put = function(path, data, fn) {
      var opts;
      if (data == null) {
        data = {};
      }
      if (fn == null) {
        fn = null;
      }
      opts = this.prepare_opts(data);
      debug(path);
      return this.slumber(path).put(opts, this.fn_wrapper(fn));
    };

    ApiBaseHTTP.prototype.patch = function(path, data, fn) {
      var opts;
      if (data == null) {
        data = {};
      }
      if (fn == null) {
        fn = null;
      }
      opts = this.prepare_opts(data);
      debug(path);
      return this.slumber(path).patch(opts, this.fn_wrapper(fn));
    };

    return ApiBaseHTTP;

  })(ApiBase);

}).call(this);
