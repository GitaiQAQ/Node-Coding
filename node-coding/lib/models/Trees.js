(function() {
  var BaseModel, Trees, util,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  BaseModel = require('../BaseModel');

  util = require('util');

  Trees = (function(superClass) {
    extend(Trees, superClass);

    function Trees() {
      this.treeUsingGET = bind(this.treeUsingGET, this);
      return Trees.__super__.constructor.apply(this, arguments);
    }


    /*
    
     method		: get
     operationId	: treeUsingGET
     description	: 目录
     path			: user,project,tree
     query		: 
     body			: currentApp(undefined),ref(string),path(string)
     */

    Trees.prototype.treeUsingGET = function(user, project, tree, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Trees::treeUsingGET()");
      return this.get(util.format("user/%s/project/%s/git/tree/%s", user, project, tree), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };

    return Trees;

  })(BaseModel);

  module.exports = function(client) {
    return new Trees(client);
  };

}).call(this);
