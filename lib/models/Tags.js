(function() {
  var BaseModel, Tags, util,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  BaseModel = require('../BaseModel');

  util = require('util');

  Tags = (function(superClass) {
    extend(Tags, superClass);

    function Tags() {
      this.deleteTag = bind(this.deleteTag, this);
      this.createTag = bind(this.createTag, this);
      this.list_4 = bind(this.list_4, this);
      return Tags.__super__.constructor.apply(this, arguments);
    }


    /*
    
     method		: get
     operationId	: list_4
     description	: 标签列表
     path			: user,project
     query		: page(integer),pageSize(integer)
     body			:
     */

    Tags.prototype.list_4 = function(user, project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tags::list_4()");
      return this.get(util.format("user/%s/project/%s/git/tags", user, project), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: createTag
     description	: 创建标签
     path			: user,project
     query		: tag_name(string),tag_point(string),message(string)
     body			:
     */

    Tags.prototype.createTag = function(user, project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tags::createTag()");
      return this.post(util.format("user/%s/project/%s/git/tags/create", user, project), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: deleteTag
     description	: 删除标签
     path			: user,project
     query		: tag_name(string)
     body			:
     */

    Tags.prototype.deleteTag = function(user, project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tags::deleteTag()");
      return this.post(util.format("user/%s/project/%s/git/tags/delete", user, project), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };

    return Tags;

  })(BaseModel);

  module.exports = function(client) {
    return new Tags(client);
  };

}).call(this);
