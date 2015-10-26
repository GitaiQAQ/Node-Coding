(function() {
  var BaseModel, Tasks, util,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  BaseModel = require('../BaseModel');

  util = require('util');

  Tasks = (function(superClass) {
    extend(Tasks, superClass);

    function Tasks() {
      this.userTasks = bind(this.userTasks, this);
      this.list_5 = bind(this.list_5, this);
      this.userTasksOfProject = bind(this.userTasksOfProject, this);
      this.getTaskByLabel = bind(this.getTaskByLabel, this);
      this.userTasksCountInProject = bind(this.userTasksCountInProject, this);
      this.userTasksCount = bind(this.userTasksCount, this);
      this.pageTaskWatchers = bind(this.pageTaskWatchers, this);
      this.watch_2 = bind(this.watch_2, this);
      this.updateStatusUsingPUT = bind(this.updateStatusUsingPUT, this);
      this.updatePriorityUsingPUT = bind(this.updatePriorityUsingPUT, this);
      this.updateOwnerUsingPUT = bind(this.updateOwnerUsingPUT, this);
      this.operateTaskLabels = bind(this.operateTaskLabels, this);
      this.addTaskLabel = bind(this.addTaskLabel, this);
      this.getDescription = bind(this.getDescription, this);
      this.updateDeadlineUsingPUT = bind(this.updateDeadlineUsingPUT, this);
      this.updateContentUsingPUT = bind(this.updateContentUsingPUT, this);
      this.getComments = bind(this.getComments, this);
      this.deleteCommentUsingDELETE = bind(this.deleteCommentUsingDELETE, this);
      this.pubComment = bind(this.pubComment, this);
      this.update4clientUsingPUT = bind(this.update4clientUsingPUT, this);
      this.taskCountByUser = bind(this.taskCountByUser, this);
      this.taskCreating = bind(this.taskCreating, this);
      this.listOfOwner = bind(this.listOfOwner, this);
      this.getTask = bind(this.getTask, this);
      this.create = bind(this.create, this);
      return Tasks.__super__.constructor.apply(this, arguments);
    }


    /*
    
     method		: post
     operationId	: create
     description	: 创建任务
     path			: project
     query		: owner_id(string),priority(integer),deadline(string),description(string),content(string),labels(string),watchers(string)
     body			:
     */

    Tasks.prototype.create = function(project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tasks::create()");
      return this.post(util.format("project/%s/task", project), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: getTask
     description	: 创建任务
     path			: project,id
     query		: parseDescription(boolean)
     body			:
     */

    Tasks.prototype.getTask = function(project, id, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tasks::getTask()");
      return this.get(util.format("project/%s/task/%s", project, id), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: listOfOwner
     description	: 列出某人的任务列表
     path			: project,owner,status
     query		: page(integer),pageSize(integer)
     body			: key(string)
     */

    Tasks.prototype.listOfOwner = function(project, owner, status, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tasks::listOfOwner()");
      return this.get(util.format("project/%s/tasks/user/%s/%s", project, owner, status), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: taskCreating
     description	: 全局任务创建
     path			: 
     query		: 
     body			:
     */

    Tasks.prototype.taskCreating = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tasks::taskCreating()");
      return this.get("task/creating", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: taskCountByUser
     description	: 任务统计信息
     path			: user,project
     query		: 
     body			:
     */

    Tasks.prototype.taskCountByUser = function(user, project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tasks::taskCountByUser()");
      return this.get(util.format("user/%s/project/%s/task/count", user, project), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: put
     operationId	: update4clientUsingPUT
     description	: 修改任务
     path			: user,project,id
     query		: status(integer),priority(integer),id(integer),owner_id(integer),deadline(string),description(string),content(string)
     body			:
     */

    Tasks.prototype.update4clientUsingPUT = function(user, project, id, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tasks::update4clientUsingPUT()");
      return this.put(util.format("user/%s/project/%s/task/%s", user, project, id), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: pubComment
     description	: 创建任务评论
     path			: user,project,id
     query		: 
     body			: content(string)
     */

    Tasks.prototype.pubComment = function(user, project, id, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tasks::pubComment()");
      return this.post(util.format("user/%s/project/%s/task/%s/comment", user, project, id), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: delete
     operationId	: deleteCommentUsingDELETE
     description	: 删除任务评论
     path			: user,project,id,commentId
     query		: 
     body			:
     */

    Tasks.prototype.deleteCommentUsingDELETE = function(user, project, id, commentId, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tasks::deleteCommentUsingDELETE()");
      return this["delete"](util.format("user/%s/project/%s/task/%s/comment/%s", user, project, id, commentId), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: getComments
     description	: 获取任务评论
     path			: user,project,id
     query		: page(integer),pageSize(integer)
     body			:
     */

    Tasks.prototype.getComments = function(user, project, id, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tasks::getComments()");
      return this.get(util.format("user/%s/project/%s/task/%s/comments", user, project, id), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: put
     operationId	: updateContentUsingPUT
     description	: 修改任务内容
     path			: user,project,id
     query		: content(string),id(integer)
     body			:
     */

    Tasks.prototype.updateContentUsingPUT = function(user, project, id, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tasks::updateContentUsingPUT()");
      return this.put(util.format("user/%s/project/%s/task/%s/content", user, project, id), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: put
     operationId	: updateDeadlineUsingPUT
     description	: 修改任务截止日期
     path			: user,project,id
     query		: deadline(string),id(integer)
     body			:
     */

    Tasks.prototype.updateDeadlineUsingPUT = function(user, project, id, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tasks::updateDeadlineUsingPUT()");
      return this.put(util.format("user/%s/project/%s/task/%s/deadline", user, project, id), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: getDescription
     description	: 获取任务描述
     path			: user,project,id
     query		: 
     body			:
     */

    Tasks.prototype.getDescription = function(user, project, id, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tasks::getDescription()");
      return this.get(util.format("user/%s/project/%s/task/%s/description", user, project, id), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: addTaskLabel
     description	: 添加任务标签
     path			: user,project,id,labelId
     query		: 
     body			:
     */

    Tasks.prototype.addTaskLabel = function(user, project, id, labelId, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tasks::addTaskLabel()");
      return this.post(util.format("user/%s/project/%s/task/%s/label/%s", user, project, id, labelId), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: operateTaskLabels
     description	: 批量操作任务标签
     path			: user,project,id
     query		: label_id(string)
     body			:
     */

    Tasks.prototype.operateTaskLabels = function(user, project, id, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tasks::operateTaskLabels()");
      return this.post(util.format("user/%s/project/%s/task/%s/labels", user, project, id), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: put
     operationId	: updateOwnerUsingPUT
     description	: 修改任务执行者
     path			: user,project,id
     query		: owner_id(integer),id(integer)
     body			:
     */

    Tasks.prototype.updateOwnerUsingPUT = function(user, project, id, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tasks::updateOwnerUsingPUT()");
      return this.put(util.format("user/%s/project/%s/task/%s/owner", user, project, id), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: put
     operationId	: updatePriorityUsingPUT
     description	: 修改任务优先级
     path			: user,project,id
     query		: priority(integer),id(integer)
     body			:
     */

    Tasks.prototype.updatePriorityUsingPUT = function(user, project, id, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tasks::updatePriorityUsingPUT()");
      return this.put(util.format("user/%s/project/%s/task/%s/priority", user, project, id), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: put
     operationId	: updateStatusUsingPUT
     description	: 修改任务状态
     path			: user,project,id
     query		: status(integer),id(integer)
     body			:
     */

    Tasks.prototype.updateStatusUsingPUT = function(user, project, id, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tasks::updateStatusUsingPUT()");
      return this.put(util.format("user/%s/project/%s/task/%s/status", user, project, id), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: watch_2
     description	: 关注任务
     path			: user,project,id
     query		: 
     body			:
     */

    Tasks.prototype.watch_2 = function(user, project, id, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tasks::watch_2()");
      return this.post(util.format("user/%s/project/%s/task/%s/watch", user, project, id), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: pageTaskWatchers
     description	: 关注该任务的用户
     path			: user,project,id
     query		: page(integer),pageSize(integer)
     body			:
     */

    Tasks.prototype.pageTaskWatchers = function(user, project, id, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tasks::pageTaskWatchers()");
      return this.get(util.format("user/%s/project/%s/task/%s/watchers", user, project, id), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: userTasksCount
     description	:  获取当前用户项目的已完成、正在进行的、关注的数值
     path			: user,project
     query		: 
     body			:
     */

    Tasks.prototype.userTasksCount = function(user, project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tasks::userTasksCount()");
      return this.get(util.format("user/%s/project/%s/tasks/count", user, project), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: userTasksCountInProject
     description	: 统计所有 已完成 和 正在处理 的任务数
     path			: user,project
     query		: 
     body			:
     */

    Tasks.prototype.userTasksCountInProject = function(user, project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tasks::userTasksCountInProject()");
      return this.get(util.format("user/%s/project/%s/tasks/count_all", user, project), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: getTaskByLabel
     description	: 查询标签下的任务列表
     path			: user,project,id
     query		: page(integer),pageSize(integer)
     body			: global_key(string)
     */

    Tasks.prototype.getTaskByLabel = function(user, project, id, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tasks::getTaskByLabel()");
      return this.get(util.format("user/%s/project/%s/tasks/label/%s", user, project, id), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: userTasksOfProject
     description	: 列出当前用户某项目某状态的任务列表
     path			: user,project,status
     query		: page(integer),pageSize(integer)
     body			:
     */

    Tasks.prototype.userTasksOfProject = function(user, project, status, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tasks::userTasksOfProject()");
      return this.get(util.format("user/%s/project/%s/tasks/my/%s", user, project, status), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: list_5
     description	: 任务列表
     path			: user,project,status
     query		: page(integer),pageSize(integer)
     body			: key(string)
     */

    Tasks.prototype.list_5 = function(user, project, status, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tasks::list_5()");
      return this.get(util.format("user/%s/project/%s/tasks/%s", user, project, status), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: userTasks
     description	: 当前用户某状态的任务列表
     path			: user,status
     query		: page(integer),pageSize(integer)
     body			:
     */

    Tasks.prototype.userTasks = function(user, status, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tasks::userTasks()");
      return this.get(util.format("user/%s/projects/tasks/all/%s", user, status), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };

    return Tasks;

  })(BaseModel);

  module.exports = function(client) {
    return new Tasks(client);
  };

}).call(this);
