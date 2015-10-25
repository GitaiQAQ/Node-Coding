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
      this.create_fileUsingGET = bind(this.create_fileUsingGET, this);
      this.edit_fileUsingGET = bind(this.edit_fileUsingGET, this);
      this.delete_fileUsingGET = bind(this.delete_fileUsingGET, this);
      return Repo_files.__super__.constructor.apply(this, arguments);
    }


    /*
    
     method		: get
     operationId	: delete_fileUsingGET
     description	: 删除文件
     path			: user,project,delete
     query		: 
     body			: ref(string),path(string)
     */

    Repo_files.prototype.delete_fileUsingGET = function(user, project, file, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Repo_files::delete_fileUsingGET()");
      return this.get(util.format("user/%s/project/%s/git/delete/%s", user, project, file), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: edit_fileUsingGET
     description	: 更新文件
     path			: user,project,edit
     query		: 
     body			: ref(string),path(string)
     */

    Repo_files.prototype.edit_fileUsingGET = function(user, project, file, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Repo_files::edit_fileUsingGET()");
      return this.get(util.format("user/%s/project/%s/git/edit/%s", user, project, file), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: create_fileUsingGET
     description	: 新建文件
     path			: user,project,new
     query		: 
     body			: ref(string),path(string)
     */

    Repo_files.prototype.create_fileUsingGET = function(user, project, file, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Repo_files::create_fileUsingGET()");
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
