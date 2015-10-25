(function() {
  var BaseModel, Branchs, util,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  BaseModel = require('../BaseModel');

  util = require('util');

  Branchs = (function(superClass) {
    extend(Branchs, superClass);

    function Branchs() {
      this.removeProtectedBranchMemberUsingPOST = bind(this.removeProtectedBranchMemberUsingPOST, this);
      this.listProtectedBranchMemberUsingGET = bind(this.listProtectedBranchMemberUsingGET, this);
      this.enableProtectedBranchUsingPOST = bind(this.enableProtectedBranchUsingPOST, this);
      this.disableProtectedBranchUsingPOST = bind(this.disableProtectedBranchUsingPOST, this);
      this.addProtectedBranchMemberUsingPOST = bind(this.addProtectedBranchMemberUsingPOST, this);
      this.deleteBranchUsingPOST = bind(this.deleteBranchUsingPOST, this);
      this.createBranchUsingPOST = bind(this.createBranchUsingPOST, this);
      this.listUsingGET = bind(this.listUsingGET, this);
      this.setDefaultBranchUsingPOST = bind(this.setDefaultBranchUsingPOST, this);
      return Branchs.__super__.constructor.apply(this, arguments);
    }


    /*
    
     method		: post
     operationId	: setDefaultBranchUsingPOST
     description	: 设置默认分支
     path			: user,project
     query		: default_branch(string)
     body			:
     */

    Branchs.prototype.setDefaultBranchUsingPOST = function(user, project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Branchs::setDefaultBranchUsingPOST()");
      return this.post(util.format("user/%s/project/%s/git/branch/default", user, project), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: listUsingGET
     description	: 分页显示分支列表
     path			: user,project
     query		: page(integer),pageSize(integer)
     body			:
     */

    Branchs.prototype.listUsingGET = function(user, project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Branchs::listUsingGET()");
      return this.get(util.format("user/%s/project/%s/git/branches", user, project), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: createBranchUsingPOST
     description	: 新建分支
     path			: user,project
     query		: branch_name(string),start_point(string)
     body			:
     */

    Branchs.prototype.createBranchUsingPOST = function(user, project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Branchs::createBranchUsingPOST()");
      return this.post(util.format("user/%s/project/%s/git/branches/create", user, project), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: deleteBranchUsingPOST
     description	: 删除分支
     path			: user,project
     query		: branch_name(string)
     body			:
     */

    Branchs.prototype.deleteBranchUsingPOST = function(user, project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Branchs::deleteBranchUsingPOST()");
      return this.post(util.format("user/%s/project/%s/git/branches/delete", user, project), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: addProtectedBranchMemberUsingPOST
     description	: 添加保护分支成员
     path			: user,project
     query		: branch_name(string),target_global_key(string)
     body			:
     */

    Branchs.prototype.addProtectedBranchMemberUsingPOST = function(user, project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Branchs::addProtectedBranchMemberUsingPOST()");
      return this.post(util.format("user/%s/project/%s/git/branches/protected_branch/add_member", user, project), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: disableProtectedBranchUsingPOST
     description	: 取消保护分支
     path			: user,project
     query		: branch_name(string)
     body			:
     */

    Branchs.prototype.disableProtectedBranchUsingPOST = function(user, project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Branchs::disableProtectedBranchUsingPOST()");
      return this.post(util.format("user/%s/project/%s/git/branches/protected_branch/disable", user, project), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: enableProtectedBranchUsingPOST
     description	: 设置保护分支
     path			: user,project
     query		: branch_name(string)
     body			:
     */

    Branchs.prototype.enableProtectedBranchUsingPOST = function(user, project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Branchs::enableProtectedBranchUsingPOST()");
      return this.post(util.format("user/%s/project/%s/git/branches/protected_branch/enable", user, project), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: listProtectedBranchMemberUsingGET
     description	: 列出保护分支中的成员
     path			: user,project
     query		: branch_name(string)
     body			:
     */

    Branchs.prototype.listProtectedBranchMemberUsingGET = function(user, project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Branchs::listProtectedBranchMemberUsingGET()");
      return this.get(util.format("user/%s/project/%s/git/branches/protected_branch/members", user, project), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: removeProtectedBranchMemberUsingPOST
     description	: 删除保护分支成员
     path			: user,project
     query		: branch_name(string),target_global_key(string)
     body			:
     */

    Branchs.prototype.removeProtectedBranchMemberUsingPOST = function(user, project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Branchs::removeProtectedBranchMemberUsingPOST()");
      return this.post(util.format("user/%s/project/%s/git/branches/protected_branch/remove_member", user, project), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };

    return Branchs;

  })(BaseModel);

  module.exports = function(client) {
    return new Branchs(client);
  };

}).call(this);
