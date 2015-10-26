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
      this.removeProtectedBranchMember = bind(this.removeProtectedBranchMember, this);
      this.listProtectedBranchMember = bind(this.listProtectedBranchMember, this);
      this.enableProtectedBranch = bind(this.enableProtectedBranch, this);
      this.disableProtectedBranch = bind(this.disableProtectedBranch, this);
      this.addProtectedBranchMember = bind(this.addProtectedBranchMember, this);
      this.deleteBranch = bind(this.deleteBranch, this);
      this.createBranch = bind(this.createBranch, this);
      this.list = bind(this.list, this);
      this.setDefaultBranch = bind(this.setDefaultBranch, this);
      return Branchs.__super__.constructor.apply(this, arguments);
    }


    /*
    
     method		: post
     operationId	: setDefaultBranch
     description	: 设置默认分支
     path			: user,project
     query		: default_branch(string)
     body			:
     */

    Branchs.prototype.setDefaultBranch = function(user, project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Branchs::setDefaultBranch()");
      return this.post(util.format("user/%s/project/%s/git/branch/default", user, project), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: list
     description	: 分页显示分支列表
     path			: user,project
     query		: page(integer),pageSize(integer)
     body			:
     */

    Branchs.prototype.list = function(user, project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Branchs::list()");
      return this.get(util.format("user/%s/project/%s/git/branches", user, project), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: createBranch
     description	: 新建分支
     path			: user,project
     query		: branch_name(string),start_point(string)
     body			:
     */

    Branchs.prototype.createBranch = function(user, project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Branchs::createBranch()");
      return this.post(util.format("user/%s/project/%s/git/branches/create", user, project), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: deleteBranch
     description	: 删除分支
     path			: user,project
     query		: branch_name(string)
     body			:
     */

    Branchs.prototype.deleteBranch = function(user, project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Branchs::deleteBranch()");
      return this.post(util.format("user/%s/project/%s/git/branches/delete", user, project), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: addProtectedBranchMember
     description	: 添加保护分支成员
     path			: user,project
     query		: branch_name(string),target_global_key(string)
     body			:
     */

    Branchs.prototype.addProtectedBranchMember = function(user, project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Branchs::addProtectedBranchMember()");
      return this.post(util.format("user/%s/project/%s/git/branches/protected_branch/add_member", user, project), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: disableProtectedBranch
     description	: 取消保护分支
     path			: user,project
     query		: branch_name(string)
     body			:
     */

    Branchs.prototype.disableProtectedBranch = function(user, project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Branchs::disableProtectedBranch()");
      return this.post(util.format("user/%s/project/%s/git/branches/protected_branch/disable", user, project), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: enableProtectedBranch
     description	: 设置保护分支
     path			: user,project
     query		: branch_name(string)
     body			:
     */

    Branchs.prototype.enableProtectedBranch = function(user, project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Branchs::enableProtectedBranch()");
      return this.post(util.format("user/%s/project/%s/git/branches/protected_branch/enable", user, project), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: listProtectedBranchMember
     description	: 列出保护分支中的成员
     path			: user,project
     query		: branch_name(string)
     body			:
     */

    Branchs.prototype.listProtectedBranchMember = function(user, project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Branchs::listProtectedBranchMember()");
      return this.get(util.format("user/%s/project/%s/git/branches/protected_branch/members", user, project), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: removeProtectedBranchMember
     description	: 删除保护分支成员
     path			: user,project
     query		: branch_name(string),target_global_key(string)
     body			:
     */

    Branchs.prototype.removeProtectedBranchMember = function(user, project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Branchs::removeProtectedBranchMember()");
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