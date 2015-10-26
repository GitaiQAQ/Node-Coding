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
      this.getTopicWatchers = bind(this.getTopicWatchers, this);
      this.watch_1 = bind(this.watch_1, this);
      this.operateTopicLabels = bind(this.operateTopicLabels, this);
      this.addTopicLabel = bind(this.addTopicLabel, this);
      this.projectTopicComments = bind(this.projectTopicComments, this);
      this.projectTopicDetail = bind(this.projectTopicDetail, this);
      this.myWatchingProjectTopics = bind(this.myWatchingProjectTopics, this);
      this.myProjectTopicList = bind(this.myProjectTopicList, this);
      this.getMyLabelByProject = bind(this.getMyLabelByProject, this);
      this.getProjectTopicByLabel = bind(this.getProjectTopicByLabel, this);
      this.topicCount = bind(this.topicCount, this);
      this.projectTopicList = bind(this.projectTopicList, this);
      return Project_topics.__super__.constructor.apply(this, arguments);
    }


    /*
    
     method		: get
     operationId	: projectTopicList
     description	: 项目讨论列表
     path			: user,project
     query		: orderBy(integer),page(integer),pageSize(integer)
     body			:
     */

    Project_topics.prototype.projectTopicList = function(user, project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Project_topics::projectTopicList()");
      return this.get(util.format("user/%s/project/%s/topics", user, project), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: topicCount
     description	: 所有讨论的个数和我的讨论的个数
     path			: user,project
     query		: 
     body			:
     */

    Project_topics.prototype.topicCount = function(user, project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Project_topics::topicCount()");
      return this.get(util.format("user/%s/project/%s/topics/count", user, project), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: getProjectTopicByLabel
     description	: 通过标签获得讨论列表
     path			: user,project,id
     query		: orderBy(integer),page(integer),pageSize(integer)
     body			:
     */

    Project_topics.prototype.getProjectTopicByLabel = function(user, project, id, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Project_topics::getProjectTopicByLabel()");
      return this.get(util.format("user/%s/project/%s/topics/label/%s", user, project, id), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: getMyLabelByProject
     description	: 所有讨论的个数和我的讨论的个数
     path			: user,project
     query		: 
     body			:
     */

    Project_topics.prototype.getMyLabelByProject = function(user, project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Project_topics::getMyLabelByProject()");
      return this.get(util.format("user/%s/project/%s/topics/labels/my", user, project), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: myProjectTopicList
     description	: 我的讨论
     path			: user,project
     query		: orderBy(integer),page(integer),pageSize(integer)
     body			:
     */

    Project_topics.prototype.myProjectTopicList = function(user, project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Project_topics::myProjectTopicList()");
      return this.get(util.format("user/%s/project/%s/topics/mine", user, project), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: myWatchingProjectTopics
     description	: 获取我关注的讨论列表
     path			: user,project
     query		: orderBy(integer),page(integer),pageSize(integer)
     body			:
     */

    Project_topics.prototype.myWatchingProjectTopics = function(user, project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Project_topics::myWatchingProjectTopics()");
      return this.get(util.format("user/%s/project/%s/topics/watching", user, project), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: projectTopicDetail
     description	: 讨论详情
     path			: user,project,id
     query		: type(integer),toc(boolean)
     body			:
     */

    Project_topics.prototype.projectTopicDetail = function(user, project, id, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Project_topics::projectTopicDetail()");
      return this.get(util.format("user/%s/project/%s/topics/%s", user, project, id), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: projectTopicComments
     description	: 讨论评论列表
     path			: user,project,id
     query		: page(integer),pageSize(integer),type(integer)
     body			:
     */

    Project_topics.prototype.projectTopicComments = function(user, project, id, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Project_topics::projectTopicComments()");
      return this.get(util.format("user/%s/project/%s/topics/%s/comments", user, project, id), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: addTopicLabel
     description	: 讨论添加标签
     path			: user,project,id,labelId
     query		: 
     body			:
     */

    Project_topics.prototype.addTopicLabel = function(user, project, id, labelId, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Project_topics::addTopicLabel()");
      return this.post(util.format("user/%s/project/%s/topics/%s/label/%s", user, project, id, labelId), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: operateTopicLabels
     description	: 批量操作讨论标签
     path			: user,project,id
     query		: label_id(string)
     body			:
     */

    Project_topics.prototype.operateTopicLabels = function(user, project, id, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Project_topics::operateTopicLabels()");
      return this.post(util.format("user/%s/project/%s/topics/%s/labels", user, project, id), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: watch_1
     description	: 关注讨论
     path			: user,project,id
     query		: 
     body			:
     */

    Project_topics.prototype.watch_1 = function(user, project, id, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Project_topics::watch_1()");
      return this.post(util.format("user/%s/project/%s/topics/%s/watch", user, project, id), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: getTopicWatchers
     description	: 获取关注该讨论的用户
     path			: user,project,id
     query		: page(integer),pageSize(integer)
     body			:
     */

    Project_topics.prototype.getTopicWatchers = function(user, project, id, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Project_topics::getTopicWatchers()");
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