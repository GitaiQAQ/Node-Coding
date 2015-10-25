(function() {
  var BaseModel, Merge_requests, util,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  BaseModel = require('../BaseModel');

  util = require('util');

  Merge_requests = (function(superClass) {
    extend(Merge_requests, superClass);

    function Merge_requests() {
      this.listUsingGET_2 = bind(this.listUsingGET_2, this);
      this.refuseUsingPOST = bind(this.refuseUsingPOST, this);
      this.mergeUsingPOST = bind(this.mergeUsingPOST, this);
      this.cancelUsingPOST = bind(this.cancelUsingPOST, this);
      this.showUsingGET_2 = bind(this.showUsingGET_2, this);
      this.do_createUsingPOST = bind(this.do_createUsingPOST, this);
      return Merge_requests.__super__.constructor.apply(this, arguments);
    }


    /*
    
     method		: post
     operationId	: do_createUsingPOST
     description	: 创建 MergeRequest
     path			: user,project
     query		: srcBranch(string),desBranch(string),title(string),content(string),reviewers(string),tasks(string)
     body			:
     */

    Merge_requests.prototype.do_createUsingPOST = function(user, project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Merge_requests::do_createUsingPOST()");
      return this.post(util.format("user/%s/project/%s/git/merge", user, project), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: showUsingGET_2
     description	: 显示某个 MergeRequest
     path			: user,project,iid
     query		: diff(string)
     body			:
     */

    Merge_requests.prototype.showUsingGET_2 = function(user, project, iid, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Merge_requests::showUsingGET_2()");
      return this.get(util.format("user/%s/project/%s/git/merge/%s", user, project, iid), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: cancelUsingPOST
     description	: 取消 MergeRequest
     path			: user,project,iid
     query		: 
     body			:
     */

    Merge_requests.prototype.cancelUsingPOST = function(user, project, iid, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Merge_requests::cancelUsingPOST()");
      return this.post(util.format("user/%s/project/%s/git/merge/%s/cancel", user, project, iid), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: mergeUsingPOST
     description	: 合并某个 MergeRequest
     path			: user,project,iid
     query		: message(string),del_source_branch(boolean)
     body			:
     */

    Merge_requests.prototype.mergeUsingPOST = function(user, project, iid, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Merge_requests::mergeUsingPOST()");
      return this.post(util.format("user/%s/project/%s/git/merge/%s/merge", user, project, iid), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: refuseUsingPOST
     description	: 拒绝某个 MergeRequest
     path			: user,project,iid
     query		: 
     body			:
     */

    Merge_requests.prototype.refuseUsingPOST = function(user, project, iid, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Merge_requests::refuseUsingPOST()");
      return this.post(util.format("user/%s/project/%s/git/merge/%s/refuse", user, project, iid), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: listUsingGET_2
     description	: MergeRequest 列表
     path			: user,project,status
     query		: page(integer),pageSize(integer)
     body			:
     */

    Merge_requests.prototype.listUsingGET_2 = function(user, project, status, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Merge_requests::listUsingGET_2()");
      return this.get(util.format("user/%s/project/%s/git/merges/%s", user, project, status), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };

    return Merge_requests;

  })(BaseModel);

  module.exports = function(client) {
    return new Merge_requests(client);
  };

}).call(this);
