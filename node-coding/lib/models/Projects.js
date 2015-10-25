(function() {
  var BaseModel, Projects, util,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  BaseModel = require('../BaseModel');

  util = require('util');

  Projects = (function(superClass) {
    extend(Projects, superClass);

    function Projects() {
      this.public_projectsUsingGET = bind(this.public_projectsUsingGET, this);
      this.createProjectUsingPOST = bind(this.createProjectUsingPOST, this);
      this.private_projectsUsingGET = bind(this.private_projectsUsingGET, this);
      this.project_listUsingGET = bind(this.project_listUsingGET, this);
      this.watchersUsingGET = bind(this.watchersUsingGET, this);
      this.watchedUsingPOST = bind(this.watchedUsingPOST, this);
      this.watchUsingPOST = bind(this.watchUsingPOST, this);
      this.visitProjectUsingGET = bind(this.visitProjectUsingGET, this);
      this.unwatchUsingPOST = bind(this.unwatchUsingPOST, this);
      this.unstarUsingPOST = bind(this.unstarUsingPOST, this);
      this.staredUsingPOST = bind(this.staredUsingPOST, this);
      this.starUsingPOST = bind(this.starUsingPOST, this);
      this.setProjectIconUsingPOST = bind(this.setProjectIconUsingPOST, this);
      this.queryByNameUsingGET = bind(this.queryByNameUsingGET, this);
      this.publicProjectUsingGET = bind(this.publicProjectUsingGET, this);
      this.recommendedListUsingGET = bind(this.recommendedListUsingGET, this);
      this.updateUsingPUT_1 = bind(this.updateUsingPUT_1, this);
      this.getPinProjectsUsingGET = bind(this.getPinProjectsUsingGET, this);
      return Projects.__super__.constructor.apply(this, arguments);
    }


    /*
    
     method		: get
     operationId	: getPinProjectsUsingGET
     description	: 获取常用项目列表
     path			: 
     query		: page(integer),pageSize(integer)
     body			:
     */

    Projects.prototype.getPinProjectsUsingGET = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Projects::getPinProjectsUsingGET()");
      return this.get("account/projects/pin", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: put
     operationId	: updateUsingPUT_1
     description	: 更新项目信息
     path			: 
     query		: id(string),name(string),description(string)
     body			:
     */

    Projects.prototype.updateUsingPUT_1 = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Projects::updateUsingPUT_1()");
      return this.put("project", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: recommendedListUsingGET
     description	: 推荐项目list
     path			: 
     query		: 
     body			:
     */

    Projects.prototype.recommendedListUsingGET = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Projects::recommendedListUsingGET()");
      return this.get("projects/recommended", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: publicProjectUsingGET
     description	: 公有项目列表
     path			: 
     query		: page(integer),pageSize(integer)
     body			:
     */

    Projects.prototype.publicProjectUsingGET = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Projects::publicProjectUsingGET()");
      return this.get("public/all", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: queryByNameUsingGET
     description	: 通过名称查询
     path			: user,project
     query		: 
     body			:
     */

    Projects.prototype.queryByNameUsingGET = function(user, project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Projects::queryByNameUsingGET()");
      return this.get(util.format("user/%s/project/%s", user, project), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: setProjectIconUsingPOST
     description	: 设置项目图标
     path			: user,project
     query		: 
     body			:
     */

    Projects.prototype.setProjectIconUsingPOST = function(user, project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Projects::setProjectIconUsingPOST()");
      return this.post(util.format("user/%s/project/%s/project_icon", user, project), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: starUsingPOST
     description	: 收藏项目
     path			: user,project
     query		: 
     body			:
     */

    Projects.prototype.starUsingPOST = function(user, project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Projects::starUsingPOST()");
      return this.post(util.format("user/%s/project/%s/star", user, project), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: staredUsingPOST
     description	: 项目是否被收藏
     path			: user,project
     query		: 
     body			:
     */

    Projects.prototype.staredUsingPOST = function(user, project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Projects::staredUsingPOST()");
      return this.post(util.format("user/%s/project/%s/stared", user, project), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: unstarUsingPOST
     description	: 项目取消收藏
     path			: user,project
     query		: 
     body			:
     */

    Projects.prototype.unstarUsingPOST = function(user, project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Projects::unstarUsingPOST()");
      return this.post(util.format("user/%s/project/%s/unstar", user, project), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: unwatchUsingPOST
     description	: 项目取消关注
     path			: user,project
     query		: 
     body			:
     */

    Projects.prototype.unwatchUsingPOST = function(user, project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Projects::unwatchUsingPOST()");
      return this.post(util.format("user/%s/project/%s/unwatch", user, project), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: visitProjectUsingGET
     description	: 更新项目阅读时间
     path			: user,project
     query		: 
     body			:
     */

    Projects.prototype.visitProjectUsingGET = function(user, project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Projects::visitProjectUsingGET()");
      return this.get(util.format("user/%s/project/%s/update_visit", user, project), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: watchUsingPOST
     description	: 关注项目
     path			: user,project
     query		: 
     body			:
     */

    Projects.prototype.watchUsingPOST = function(user, project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Projects::watchUsingPOST()");
      return this.post(util.format("user/%s/project/%s/watch", user, project), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: watchedUsingPOST
     description	: 项目是否被关注
     path			: user,project
     query		: 
     body			:
     */

    Projects.prototype.watchedUsingPOST = function(user, project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Projects::watchedUsingPOST()");
      return this.post(util.format("user/%s/project/%s/watched", user, project), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: watchersUsingGET
     description	: 项目关注者
     path			: user,project
     query		: 
     body			:
     */

    Projects.prototype.watchersUsingGET = function(user, project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Projects::watchersUsingGET()");
      return this.get(util.format("user/%s/project/%s/watchers", user, project), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: project_listUsingGET
     description	: 我的项目列表
     path			: 
     query		: type(string),sort(string),page(integer),pageSize(integer)
     body			:
     */

    Projects.prototype.project_listUsingGET = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Projects::project_listUsingGET()");
      return this.get("user/projects", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: private_projectsUsingGET
     description	: 私有项目列表
     path			: 
     query		: type(string),page(integer),pageSize(integer)
     body			:
     */

    Projects.prototype.private_projectsUsingGET = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Projects::private_projectsUsingGET()");
      return this.get("user/projects/private", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: createProjectUsingPOST
     description	: 创建项目
     path			: global_key
     query		: 
     body			:
     */

    Projects.prototype.createProjectUsingPOST = function(global_key, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Projects::createProjectUsingPOST()");
      return this.post(util.format("user/%s/project", global_key), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: public_projectsUsingGET
     description	: 公有项目列表
     path			: global_key
     query		: type(string),page(integer),pageSize(integer)
     body			:
     */

    Projects.prototype.public_projectsUsingGET = function(global_key, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Projects::public_projectsUsingGET()");
      return this.get(util.format("user/%s/projects/public", global_key), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };

    return Projects;

  })(BaseModel);

  module.exports = function(client) {
    return new Projects(client);
  };

}).call(this);
