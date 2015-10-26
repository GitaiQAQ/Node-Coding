(function() {
  var BaseModel, Blobs, util,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  BaseModel = require('../BaseModel');

  util = require('util');

  Blobs = (function(superClass) {
    extend(Blobs, superClass);

    function Blobs() {
      this.blob = bind(this.blob, this);
      return Blobs.__super__.constructor.apply(this, arguments);
    }


    /*
    
     method		: get
     operationId	: blob
     description	: 获取 blob
     path			: user,project,blob
     query		: 
     body			: currentApp(undefined),ref(string),path(string)
     */

    Blobs.prototype.blob = function(user, project, blob, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Blobs::blob()");
      return this.get(util.format("user/%s/project/%s/git/blob/%s", user, project, blob), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };

    return Blobs;

  })(BaseModel);

  module.exports = function(client) {
    return new Blobs(client);
  };

}).call(this);
