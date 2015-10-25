(function() {
  var BaseModel, Project_topics, util,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  BaseModel = require('../BaseModel');

  util = require('util');

  Project_topics = (function(superClass) {
    extend(Project_topics, superClass);

    function Project_topics() {
      this.getTopicWatchersUsingGET = bind(this.getTopicWatchersUsingGET, this);
      this.watchUsingPOST_1 = bind(this.watchUsingPOST_1, this);
      this.operateTopicLabelsUsingPOST = bind(this.operateTopicLabelsUsingPOST, this);
      this.addTopicLabelUsingPOST = bind(this.addTopicLabelUsingPOST, this);
      this.projectTopicCommentsUsingGET = bind(this.projectTopicCommentsUsingGET, this);
      this.projectTopicDetailUsingGET = bind(this.projectTopicDetailUsingGET, this);
      this.myWatchingProjectTopicsUsingGET = bind(this.myWatchingProjectTopicsUsingGET, this);
      this.myProjectTopicListUsingGET = bind(this.myProjectTopicListUsingGET, this);
      this.getMyLabelByProjectUsingGET = bind(this.getMyLabelByProjectUsingGET, this);
      this.getProjectTopicByLabelUsingGET = bind(this.getProjectTopicByLabelUsingGET, this);
      this.topicCountUsingGET = bind(this.topicCountUsingGET, this);
      this.projectTopicListUsingGET = bind(this.projectTopicListUsingGET, this);
      return Project_topics.__super__.constructor.apply(this, arguments);
    }


    /*
    
     method		: get
     operationId	: projectTopicListUsingGET
     description	: 项目讨论列表
     path			: user,project
     query		: orderBy(integer),page(integer),pageSize(integer)
     body			:
     */

    Project_topics.prototype.projectTopicListUsingGET = function(user, project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Project_topics::projectTopicListUsingGET()");
      return this.get(util.format("user/%s/project/%s/topics", user, project), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: topicCountUsingGET
     description	: 所有讨论的个数和我的讨论的个数
     path			: user,project
     query		: 
     body			:
     */

    Project_topics.prototype.topicCountUsingGET = function(user, project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Project_topics::topicCountUsingGET()");
      return this.get(util.format("user/%s/project/%s/topics/count", user, project), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: getProjectTopicByLabelUsingGET
     description	: 通过标签获得讨论列表
     path			: user,project,id
     query		: orderBy(integer),page(integer),pageSize(integer)
     body			:
     */

    Project_topics.prototype.getProjectTopicByLabelUsingGET = function(user, project, id, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Project_topics::getProjectTopicByLabelUsingGET()");
      return this.get(util.format("user/%s/project/%s/topics/label/%s", user, project, id), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: getMyLabelByProjectUsingGET
     description	: 所有讨论的个数和我的讨论的个数
     path			: user,project
     query		: 
     body			:
     */

    Project_topics.prototype.getMyLabelByProjectUsingGET = function(user, project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Project_topics::getMyLabelByProjectUsingGET()");
      return this.get(util.format("user/%s/project/%s/topics/labels/my", user, project), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: myProjectTopicListUsingGET
     description	: 我的讨论
     path			: user,project
     query		: orderBy(integer),page(integer),pageSize(integer)
     body			:
     */

    Project_topics.prototype.myProjectTopicListUsingGET = function(user, project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Project_topics::myProjectTopicListUsingGET()");
      return this.get(util.format("user/%s/project/%s/topics/mine", user, project), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: myWatchingProjectTopicsUsingGET
     description	: 获取我关注的讨论列表
     path			: user,project
     query		: orderBy(integer),page(integer),pageSize(integer)
     body			:
     */

    Project_topics.prototype.myWatchingProjectTopicsUsingGET = function(user, project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Project_topics::myWatchingProjectTopicsUsingGET()");
      return this.get(util.format("user/%s/project/%s/topics/watching", user, project), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: projectTopicDetailUsingGET
     description	: 讨论详情
     path			: user,project,id
     query		: type(integer),toc(boolean)
     body			:
     */

    Project_topics.prototype.projectTopicDetailUsingGET = function(user, project, id, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Project_topics::projectTopicDetailUsingGET()");
      return this.get(util.format("user/%s/project/%s/topics/%s", user, project, id), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: projectTopicCommentsUsingGET
     description	: 讨论评论列表
     path			: user,project,id
     query		: page(integer),pageSize(integer),type(integer)
     body			:
     */

    Project_topics.prototype.projectTopicCommentsUsingGET = function(user, project, id, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Project_topics::projectTopicCommentsUsingGET()");
      return this.get(util.format("user/%s/project/%s/topics/%s/comments", user, project, id), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: addTopicLabelUsingPOST
     description	: 讨论添加标签
     path			: user,project,id,labelId
     query		: 
     body			:
     */

    Project_topics.prototype.addTopicLabelUsingPOST = function(user, project, id, labelId, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Project_topics::addTopicLabelUsingPOST()");
      return this.post(util.format("user/%s/project/%s/topics/%s/label/%s", user, project, id, labelId), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: operateTopicLabelsUsingPOST
     description	: 批量操作讨论标签
     path			: user,project,id
     query		: label_id(string)
     body			:
     */

    Project_topics.prototype.operateTopicLabelsUsingPOST = function(user, project, id, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Project_topics::operateTopicLabelsUsingPOST()");
      return this.post(util.format("user/%s/project/%s/topics/%s/labels", user, project, id), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: watchUsingPOST_1
     description	: 关注讨论
     path			: user,project,id
     query		: 
     body			:
     */

    Project_topics.prototype.watchUsingPOST_1 = function(user, project, id, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Project_topics::watchUsingPOST_1()");
      return this.post(util.format("user/%s/project/%s/topics/%s/watch", user, project, id), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: getTopicWatchersUsingGET
     description	: 获取关注该讨论的用户
     path			: user,project,id
     query		: page(integer),pageSize(integer)
     body			:
     */

    Project_topics.prototype.getTopicWatchersUsingGET = function(user, project, id, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Project_topics::getTopicWatchersUsingGET()");
      return this.get(util.format("user/%s/project/%s/topics/%s/watchers", user, project, id), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };

    return Project_topics;

  })(BaseModel);

  module.exports = function(client) {
    return new Project_topics(client);
  };

}).call(this);
