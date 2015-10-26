(function() {
  var BaseModel, Historys, util,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  BaseModel = require('../BaseModel');

  util = require('util');

  Historys = (function(superClass) {
    extend(Historys, superClass);

    function Historys() {
      this.history = bind(this.history, this);
      return Historys.__super__.constructor.apply(this, arguments);
    }


    /*
    
     method		: get
     operationId	: history
     description	: 获取代码的历史
     path			: user,project,commits
     query		: page(integer),pageSize(integer)
     body			: currentApp(undefined),ref(string),path(string)
     */

    Historys.prototype.history = function(user, project, commits, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Historys::history()");
      return this.get(util.format("user/%s/project/%s/git/commits/%s", user, project, commits), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };

    return Historys;

  })(BaseModel);

  module.exports = function(client) {
    return new Historys(client);
  };

}).call(this);
