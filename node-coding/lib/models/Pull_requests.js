(function() {
  var BaseModel, Pull_requests, util,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  BaseModel = require('../BaseModel');

  util = require('util');

  Pull_requests = (function(superClass) {
    extend(Pull_requests, superClass);

    function Pull_requests() {
      this.listUsingGET_3 = bind(this.listUsingGET_3, this);
      this.refuseUsingPOST_1 = bind(this.refuseUsingPOST_1, this);
      this.mergeUsingPOST_1 = bind(this.mergeUsingPOST_1, this);
      this.showCommitsUsingGET = bind(this.showCommitsUsingGET, this);
      this.commentsUsingGET = bind(this.commentsUsingGET, this);
      this.cancelUsingPOST_1 = bind(this.cancelUsingPOST_1, this);
      this.showUsingGET_3 = bind(this.showUsingGET_3, this);
      this.createUsingGET = bind(this.createUsingGET, this);
      return Pull_requests.__super__.constructor.apply(this, arguments);
    }


    /*
    
     method		: get
     operationId	: createUsingGET
     description	: 创建 PullRequest
     path			: user,project
     query		: src_branch(string),des_user_name(string),des_project_name(string),des_branch(string),diff(string)
     body			:
     */

    Pull_requests.prototype.createUsingGET = function(user, project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Pull_requests::createUsingGET()");
      return this.get(util.format("user/%s/project/%s/git/pull/create", user, project), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: showUsingGET_3
     description	: 获取某个 PullRequest
     path			: user,project,iid
     query		: diff(string)
     body			:
     */

    Pull_requests.prototype.showUsingGET_3 = function(user, project, iid, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Pull_requests::showUsingGET_3()");
      return this.get(util.format("user/%s/project/%s/git/pull/%s", user, project, iid), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: cancelUsingPOST_1
     description	: 取消 PullRequest
     path			: user,project,iid
     query		: 
     body			:
     */

    Pull_requests.prototype.cancelUsingPOST_1 = function(user, project, iid, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Pull_requests::cancelUsingPOST_1()");
      return this.post(util.format("user/%s/project/%s/git/pull/%s/cancel", user, project, iid), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: commentsUsingGET
     description	: PullRequest 评论列表
     path			: user,project,iid
     query		: 
     body			:
     */

    Pull_requests.prototype.commentsUsingGET = function(user, project, iid, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Pull_requests::commentsUsingGET()");
      return this.get(util.format("user/%s/project/%s/git/pull/%s/comments", user, project, iid), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: showCommitsUsingGET
     description	: 获取某个 PullRequest 的评论
     path			: user,project,iid
     query		: 
     body			:
     */

    Pull_requests.prototype.showCommitsUsingGET = function(user, project, iid, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Pull_requests::showCommitsUsingGET()");
      return this.get(util.format("user/%s/project/%s/git/pull/%s/commits", user, project, iid), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: mergeUsingPOST_1
     description	: 合并 PullRequest
     path			: user,project,iid
     query		: message(string)
     body			:
     */

    Pull_requests.prototype.mergeUsingPOST_1 = function(user, project, iid, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Pull_requests::mergeUsingPOST_1()");
      return this.post(util.format("user/%s/project/%s/git/pull/%s/merge", user, project, iid), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: refuseUsingPOST_1
     description	: 拒绝 PullRequest
     path			: user,project,iid
     query		: 
     body			:
     */

    Pull_requests.prototype.refuseUsingPOST_1 = function(user, project, iid, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Pull_requests::refuseUsingPOST_1()");
      return this.post(util.format("user/%s/project/%s/git/pull/%s/refuse", user, project, iid), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: listUsingGET_3
     description	: PullRequest 列表
     path			: user,project,status
     query		: page(integer),pageSize(integer)
     body			:
     */

    Pull_requests.prototype.listUsingGET_3 = function(user, project, status, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Pull_requests::listUsingGET_3()");
      return this.get(util.format("user/%s/project/%s/git/pulls/%s", user, project, status), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };

    return Pull_requests;

  })(BaseModel);

  module.exports = function(client) {
    return new Pull_requests(client);
  };

}).call(this);
