(function() {
  var BaseModel, Depots, util,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  BaseModel = require('../BaseModel');

  util = require('util');

  Depots = (function(superClass) {
    extend(Depots, superClass);

    function Depots() {
      this.initDepotUsingPOST = bind(this.initDepotUsingPOST, this);
      this.importRepoUsingGET = bind(this.importRepoUsingGET, this);
      this.listWebHookUsingGET = bind(this.listWebHookUsingGET, this);
      this.getWebHookUsingGET = bind(this.getWebHookUsingGET, this);
      this.createWebHookUsingPOST = bind(this.createWebHookUsingPOST, this);
      this.forksUsingGET = bind(this.forksUsingGET, this);
      this.forkUsingPOST = bind(this.forkUsingPOST, this);
      this.indexUsingGET = bind(this.indexUsingGET, this);
      return Depots.__super__.constructor.apply(this, arguments);
    }


    /*
    
     method		: get
     operationId	: indexUsingGET
     description	: 获取仓库信息
     path			: user,project
     query		: 
     body			:
     */

    Depots.prototype.indexUsingGET = function(user, project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Depots::indexUsingGET()");
      return this.get(util.format("user/%s/project/%s/git", user, project), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: forkUsingPOST
     description	: fork
     path			: user,project
     query		: 
     body			:
     */

    Depots.prototype.forkUsingPOST = function(user, project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Depots::forkUsingPOST()");
      return this.post(util.format("user/%s/project/%s/git/fork", user, project), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: forksUsingGET
     description	: 项目被fork的列表
     path			: user,project
     query		: 
     body			:
     */

    Depots.prototype.forksUsingGET = function(user, project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Depots::forksUsingGET()");
      return this.get(util.format("user/%s/project/%s/git/forks", user, project), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: createWebHookUsingPOST
     description	: 创建 webhook
     path			: user,project
     query		: hook_url(string),token(string),type_push(boolean),type_mr_pr(boolean),type_topic(boolean),type_member(boolean),type_comment(boolean),type_document(boolean),type_watch(boolean),type_star(boolean),type_task(boolean)
     body			:
     */

    Depots.prototype.createWebHookUsingPOST = function(user, project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Depots::createWebHookUsingPOST()");
      return this.post(util.format("user/%s/project/%s/git/hook", user, project), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: getWebHookUsingGET
     description	: 获取 webhook
     path			: user,project,id
     query		: 
     body			:
     */

    Depots.prototype.getWebHookUsingGET = function(user, project, id, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Depots::getWebHookUsingGET()");
      return this.get(util.format("user/%s/project/%s/git/hook/%s", user, project, id), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: listWebHookUsingGET
     description	: 列出项目设置的 webhook
     path			: user,project
     query		: 
     body			:
     */

    Depots.prototype.listWebHookUsingGET = function(user, project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Depots::listWebHookUsingGET()");
      return this.get(util.format("user/%s/project/%s/git/hooks", user, project), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: importRepoUsingGET
     description	: 导入仓库
     path			: user,project
     query		: origin_url(string),vcs_type(string)
     body			:
     */

    Depots.prototype.importRepoUsingGET = function(user, project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Depots::importRepoUsingGET()");
      return this.get(util.format("user/%s/project/%s/git/import", user, project), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: initDepotUsingPOST
     description	: 初始化仓库
     path			: user,project
     query		: type(string),gitReadmeEnabled(string),gitIgnore(string),gitLicense(string),importFrom(string),vcsType(string)
     body			:
     */

    Depots.prototype.initDepotUsingPOST = function(user, project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Depots::initDepotUsingPOST()");
      return this.post(util.format("user/%s/project/%s/git/init", user, project), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };

    return Depots;

  })(BaseModel);

  module.exports = function(client) {
    return new Depots(client);
  };

}).call(this);
