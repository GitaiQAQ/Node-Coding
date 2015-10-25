(function() {
  var BaseModel, Commits, util,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  BaseModel = require('../BaseModel');

  util = require('util');

  Commits = (function(superClass) {
    extend(Commits, superClass);

    function Commits() {
      this.showUsingGET = bind(this.showUsingGET, this);
      return Commits.__super__.constructor.apply(this, arguments);
    }


    /*
    
     method		: get
     operationId	: showUsingGET
     description	: commit 列表
     path			: user,project,commit
     query		: diff(string),w(string)
     body			: currentApp(undefined),ref(string)
     */

    Commits.prototype.showUsingGET = function(user, project, commit, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Commits::showUsingGET()");
      return this.get(util.format("user/%s/project/%s/git/commit/%s", user, project, commit), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };

    return Commits;

  })(BaseModel);

  module.exports = function(client) {
    return new Commits(client);
  };

}).call(this);
