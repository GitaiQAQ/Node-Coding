(function() {
  var BaseModel, Repo_files, util,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  BaseModel = require('../BaseModel');

  util = require('util');

  Repo_files = (function(superClass) {
    extend(Repo_files, superClass);

    function Repo_files() {
      this.create_file = bind(this.create_file, this);
      this.edit_file = bind(this.edit_file, this);
      this.delete_file = bind(this.delete_file, this);
      return Repo_files.__super__.constructor.apply(this, arguments);
    }


    /*
    
     method		: get
     operationId	: delete_file
     description	: 删除文件
     path			: user,project,file
     query		: 
     body			: ref(string),path(string)
     */

    Repo_files.prototype.delete_file = function(user, project, file, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Repo_files::delete_file()");
      return this.get(util.format("user/%s/project/%s/git/delete/%s", user, project, file), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: edit_file
     description	: 更新文件
     path			: user,project,file
     query		: 
     body			: ref(string),path(string)
     */

    Repo_files.prototype.edit_file = function(user, project, file, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Repo_files::edit_file()");
      return this.get(util.format("user/%s/project/%s/git/edit/%s", user, project, file), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: create_file
     description	: 新建文件
     path			: user,project,file
     query		: 
     body			: ref(string),path(string)
     */

    Repo_files.prototype.create_file = function(user, project, file, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Repo_files::create_file()");
      return this.get(util.format("user/%s/project/%s/git/new/%s", user, project, file), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };

    return Repo_files;

  })(BaseModel);

  module.exports = function(client) {
    return new Repo_files(client);
  };

}).call(this);
