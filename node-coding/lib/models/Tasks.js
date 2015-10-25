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
      this.userTasksUsingGET = bind(this.userTasksUsingGET, this);
      this.listUsingGET_5 = bind(this.listUsingGET_5, this);
      this.userTasksOfProjectUsingGET = bind(this.userTasksOfProjectUsingGET, this);
      this.getTaskByLabelUsingGET = bind(this.getTaskByLabelUsingGET, this);
      this.userTasksCountInProjectUsingGET = bind(this.userTasksCountInProjectUsingGET, this);
      this.userTasksCountUsingGET = bind(this.userTasksCountUsingGET, this);
      this.pageTaskWatchersUsingGET = bind(this.pageTaskWatchersUsingGET, this);
      this.watchUsingPOST_2 = bind(this.watchUsingPOST_2, this);
      this.updateStatusUsingPUT = bind(this.updateStatusUsingPUT, this);
      this.updatePriorityUsingPUT = bind(this.updatePriorityUsingPUT, this);
      this.updateOwnerUsingPUT = bind(this.updateOwnerUsingPUT, this);
      this.operateTaskLabelsUsingPOST = bind(this.operateTaskLabelsUsingPOST, this);
      this.addTaskLabelUsingPOST = bind(this.addTaskLabelUsingPOST, this);
      this.getDescriptionUsingGET = bind(this.getDescriptionUsingGET, this);
      this.updateDeadlineUsingPUT = bind(this.updateDeadlineUsingPUT, this);
      this.updateContentUsingPUT = bind(this.updateContentUsingPUT, this);
      this.getCommentsUsingGET = bind(this.getCommentsUsingGET, this);
      this.deleteCommentUsingDELETE = bind(this.deleteCommentUsingDELETE, this);
      this.pubCommentUsingPOST = bind(this.pubCommentUsingPOST, this);
      this.update4clientUsingPUT = bind(this.update4clientUsingPUT, this);
      this.taskCountByUserUsingGET = bind(this.taskCountByUserUsingGET, this);
      this.taskCreatingUsingGET = bind(this.taskCreatingUsingGET, this);
      this.listOfOwnerUsingGET = bind(this.listOfOwnerUsingGET, this);
      this.getTaskUsingGET = bind(this.getTaskUsingGET, this);
      this.createUsingPOST = bind(this.createUsingPOST, this);
      return Tasks.__super__.constructor.apply(this, arguments);
    }


    /*
    
     method		: post
     operationId	: createUsingPOST
     description	: 创建任务
     path			: project
     query		: owner_id(string),priority(integer),deadline(string),description(string),content(string),labels(string),watchers(string)
     body			:
     */

    Tasks.prototype.createUsingPOST = function(project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tasks::createUsingPOST()");
      return this.post(util.format("project/%s/task", project), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: getTaskUsingGET
     description	: 创建任务
     path			: project,id
     query		: parseDescription(boolean)
     body			:
     */

    Tasks.prototype.getTaskUsingGET = function(project, id, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tasks::getTaskUsingGET()");
      return this.get(util.format("project/%s/task/%s", project, id), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: listOfOwnerUsingGET
     description	: 列出某人的任务列表
     path			: project,owner,status
     query		: page(integer),pageSize(integer)
     body			: key(string)
     */

    Tasks.prototype.listOfOwnerUsingGET = function(project, owner, status, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tasks::listOfOwnerUsingGET()");
      return this.get(util.format("project/%s/tasks/user/%s/%s", project, owner, status), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: taskCreatingUsingGET
     description	: 全局任务创建
     path			: 
     query		: 
     body			:
     */

    Tasks.prototype.taskCreatingUsingGET = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tasks::taskCreatingUsingGET()");
      return this.get("task/creating", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: taskCountByUserUsingGET
     description	: 任务统计信息
     path			: user,project
     query		: 
     body			:
     */

    Tasks.prototype.taskCountByUserUsingGET = function(user, project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tasks::taskCountByUserUsingGET()");
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
     operationId	: pubCommentUsingPOST
     description	: 创建任务评论
     path			: user,project,id
     query		: 
     body			: content(string)
     */

    Tasks.prototype.pubCommentUsingPOST = function(user, project, id, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tasks::pubCommentUsingPOST()");
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
     operationId	: getCommentsUsingGET
     description	: 获取任务评论
     path			: user,project,id
     query		: page(integer),pageSize(integer)
     body			:
     */

    Tasks.prototype.getCommentsUsingGET = function(user, project, id, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tasks::getCommentsUsingGET()");
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
     operationId	: getDescriptionUsingGET
     description	: 获取任务描述
     path			: user,project,id
     query		: 
     body			:
     */

    Tasks.prototype.getDescriptionUsingGET = function(user, project, id, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tasks::getDescriptionUsingGET()");
      return this.get(util.format("user/%s/project/%s/task/%s/description", user, project, id), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: addTaskLabelUsingPOST
     description	: 添加任务标签
     path			: user,project,id,labelId
     query		: 
     body			:
     */

    Tasks.prototype.addTaskLabelUsingPOST = function(user, project, id, labelId, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tasks::addTaskLabelUsingPOST()");
      return this.post(util.format("user/%s/project/%s/task/%s/label/%s", user, project, id, labelId), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: operateTaskLabelsUsingPOST
     description	: 批量操作任务标签
     path			: user,project,id
     query		: label_id(string)
     body			:
     */

    Tasks.prototype.operateTaskLabelsUsingPOST = function(user, project, id, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tasks::operateTaskLabelsUsingPOST()");
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
     operationId	: watchUsingPOST_2
     description	: 关注任务
     path			: user,project,id
     query		: 
     body			:
     */

    Tasks.prototype.watchUsingPOST_2 = function(user, project, id, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tasks::watchUsingPOST_2()");
      return this.post(util.format("user/%s/project/%s/task/%s/watch", user, project, id), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: pageTaskWatchersUsingGET
     description	: 关注该任务的用户
     path			: user,project,id
     query		: page(integer),pageSize(integer)
     body			:
     */

    Tasks.prototype.pageTaskWatchersUsingGET = function(user, project, id, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tasks::pageTaskWatchersUsingGET()");
      return this.get(util.format("user/%s/project/%s/task/%s/watchers", user, project, id), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: userTasksCountUsingGET
     description	:  获取当前用户项目的已完成、正在进行的、关注的数值
     path			: user,project
     query		: 
     body			:
     */

    Tasks.prototype.userTasksCountUsingGET = function(user, project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tasks::userTasksCountUsingGET()");
      return this.get(util.format("user/%s/project/%s/tasks/count", user, project), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: userTasksCountInProjectUsingGET
     description	: 统计所有 已完成 和 正在处理 的任务数
     path			: user,project
     query		: 
     body			:
     */

    Tasks.prototype.userTasksCountInProjectUsingGET = function(user, project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tasks::userTasksCountInProjectUsingGET()");
      return this.get(util.format("user/%s/project/%s/tasks/count_all", user, project), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: getTaskByLabelUsingGET
     description	: 查询标签下的任务列表
     path			: user,project,id
     query		: page(integer),pageSize(integer)
     body			: global_key(string)
     */

    Tasks.prototype.getTaskByLabelUsingGET = function(user, project, id, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tasks::getTaskByLabelUsingGET()");
      return this.get(util.format("user/%s/project/%s/tasks/label/%s", user, project, id), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: userTasksOfProjectUsingGET
     description	: 列出当前用户某项目某状态的任务列表
     path			: user,project,status
     query		: page(integer),pageSize(integer)
     body			:
     */

    Tasks.prototype.userTasksOfProjectUsingGET = function(user, project, status, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tasks::userTasksOfProjectUsingGET()");
      return this.get(util.format("user/%s/project/%s/tasks/my/%s", user, project, status), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: listUsingGET_5
     description	: 任务列表
     path			: user,project,status
     query		: page(integer),pageSize(integer)
     body			: key(string)
     */

    Tasks.prototype.listUsingGET_5 = function(user, project, status, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tasks::listUsingGET_5()");
      return this.get(util.format("user/%s/project/%s/tasks/%s", user, project, status), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: userTasksUsingGET
     description	: 当前用户某状态的任务列表
     path			: user,status
     query		: page(integer),pageSize(integer)
     body			:
     */

    Tasks.prototype.userTasksUsingGET = function(user, status, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tasks::userTasksUsingGET()");
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
