BaseModel = require '../BaseModel'
util = require 'util'

class Tasks extends BaseModel

  ###

   method		: post
   operationId	: create
   description	: 创建任务
   path			: project
   query		: owner_id(string),priority(integer),deadline(string),description(string),content(string),labels(string),watchers(string)
   body			: 

  ###

  create: (project, params = {}, fn = null) =>
    @debug "Tasks::create()"
    @post util.format("project/%s/task",project), params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: getTask
   description	: 创建任务
   path			: project,id
   query		: parseDescription(boolean)
   body			: 

  ###

  getTask: (project,id, params = {}, fn = null) =>
    @debug "Tasks::getTask()"
    @get util.format("project/%s/task/%s",project,id), params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: listOfOwner
   description	: 列出某人的任务列表
   path			: project,owner,status
   query		: page(integer),pageSize(integer)
   body			: key(string)

  ###

  listOfOwner: (project,owner,status, params = {}, fn = null) =>
    @debug "Tasks::listOfOwner()"
    @get util.format("project/%s/tasks/user/%s/%s",project,owner,status), params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: taskCreating
   description	: 全局任务创建
   path			: 
   query		: 
   body			: 

  ###

  taskCreating: ( params = {}, fn = null) =>
    @debug "Tasks::taskCreating()"
    @get "task/creating", params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: taskCountByUser
   description	: 任务统计信息
   path			: user,project
   query		: 
   body			: 

  ###

  taskCountByUser: (user,project, params = {}, fn = null) =>
    @debug "Tasks::taskCountByUser()"
    @get util.format("user/%s/project/%s/task/count",user,project), params, (data) ->
      fn data if fn

  ###

   method		: put
   operationId	: update4client
   description	: 修改任务
   path			: user,project,id
   query		: status(integer),priority(integer),id(integer),owner_id(integer),deadline(string),description(string),content(string)
   body			: 

  ###

  update4client: (user,project,id, params = {}, fn = null) =>
    @debug "Tasks::update4client()"
    @put util.format("user/%s/project/%s/task/%s",user,project,id), params, (data) ->
      fn data if fn

  ###

   method		: post
   operationId	: pubComment
   description	: 创建任务评论
   path			: user,project,id
   query		: 
   body			: content(string)

  ###

  pubComment: (user,project,id, params = {}, fn = null) =>
    @debug "Tasks::pubComment()"
    @post util.format("user/%s/project/%s/task/%s/comment",user,project,id), params, (data) ->
      fn data if fn

  ###

   method		: delete
   operationId	: deleteComment
   description	: 删除任务评论
   path			: user,project,id,commentId
   query		: 
   body			: 

  ###

  deleteComment: (user,project,id,commentId, params = {}, fn = null) =>
    @debug "Tasks::deleteComment()"
    @delete util.format("user/%s/project/%s/task/%s/comment/%s",user,project,id,commentId), params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: getComments
   description	: 获取任务评论
   path			: user,project,id
   query		: page(integer),pageSize(integer)
   body			: 

  ###

  getComments: (user,project,id, params = {}, fn = null) =>
    @debug "Tasks::getComments()"
    @get util.format("user/%s/project/%s/task/%s/comments",user,project,id), params, (data) ->
      fn data if fn

  ###

   method		: put
   operationId	: updateContent
   description	: 修改任务内容
   path			: user,project,id
   query		: content(string),id(integer)
   body			: 

  ###

  updateContent: (user,project,id, params = {}, fn = null) =>
    @debug "Tasks::updateContent()"
    @put util.format("user/%s/project/%s/task/%s/content",user,project,id), params, (data) ->
      fn data if fn

  ###

   method		: put
   operationId	: updateDeadline
   description	: 修改任务截止日期
   path			: user,project,id
   query		: deadline(string),id(integer)
   body			: 

  ###

  updateDeadline: (user,project,id, params = {}, fn = null) =>
    @debug "Tasks::updateDeadline()"
    @put util.format("user/%s/project/%s/task/%s/deadline",user,project,id), params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: getDescription
   description	: 获取任务描述
   path			: user,project,id
   query		: 
   body			: 

  ###

  getDescription: (user,project,id, params = {}, fn = null) =>
    @debug "Tasks::getDescription()"
    @get util.format("user/%s/project/%s/task/%s/description",user,project,id), params, (data) ->
      fn data if fn

  ###

   method		: post
   operationId	: addTaskLabel
   description	: 添加任务标签
   path			: user,project,id,labelId
   query		: 
   body			: 

  ###

  addTaskLabel: (user,project,id,labelId, params = {}, fn = null) =>
    @debug "Tasks::addTaskLabel()"
    @post util.format("user/%s/project/%s/task/%s/label/%s",user,project,id,labelId), params, (data) ->
      fn data if fn

  ###

   method		: post
   operationId	: operateTaskLabels
   description	: 批量操作任务标签
   path			: user,project,id
   query		: label_id(string)
   body			: 

  ###

  operateTaskLabels: (user,project,id, params = {}, fn = null) =>
    @debug "Tasks::operateTaskLabels()"
    @post util.format("user/%s/project/%s/task/%s/labels",user,project,id), params, (data) ->
      fn data if fn

  ###

   method		: put
   operationId	: updateOwner
   description	: 修改任务执行者
   path			: user,project,id
   query		: owner_id(integer),id(integer)
   body			: 

  ###

  updateOwner: (user,project,id, params = {}, fn = null) =>
    @debug "Tasks::updateOwner()"
    @put util.format("user/%s/project/%s/task/%s/owner",user,project,id), params, (data) ->
      fn data if fn

  ###

   method		: put
   operationId	: updatePriority
   description	: 修改任务优先级
   path			: user,project,id
   query		: priority(integer),id(integer)
   body			: 

  ###

  updatePriority: (user,project,id, params = {}, fn = null) =>
    @debug "Tasks::updatePriority()"
    @put util.format("user/%s/project/%s/task/%s/priority",user,project,id), params, (data) ->
      fn data if fn

  ###

   method		: put
   operationId	: updateStatus
   description	: 修改任务状态
   path			: user,project,id
   query		: status(integer),id(integer)
   body			: 

  ###

  updateStatus: (user,project,id, params = {}, fn = null) =>
    @debug "Tasks::updateStatus()"
    @put util.format("user/%s/project/%s/task/%s/status",user,project,id), params, (data) ->
      fn data if fn

  ###

   method		: post
   operationId	: watch_2
   description	: 关注任务
   path			: user,project,id
   query		: 
   body			: 

  ###

  watch_2: (user,project,id, params = {}, fn = null) =>
    @debug "Tasks::watch_2()"
    @post util.format("user/%s/project/%s/task/%s/watch",user,project,id), params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: pageTaskWatchers
   description	: 关注该任务的用户
   path			: user,project,id
   query		: page(integer),pageSize(integer)
   body			: 

  ###

  pageTaskWatchers: (user,project,id, params = {}, fn = null) =>
    @debug "Tasks::pageTaskWatchers()"
    @get util.format("user/%s/project/%s/task/%s/watchers",user,project,id), params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: userTasksCount
   description	:  获取当前用户项目的已完成、正在进行的、关注的数值
   path			: user,project
   query		: 
   body			: 

  ###

  userTasksCount: (user,project, params = {}, fn = null) =>
    @debug "Tasks::userTasksCount()"
    @get util.format("user/%s/project/%s/tasks/count",user,project), params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: userTasksCountInProject
   description	: 统计所有 已完成 和 正在处理 的任务数
   path			: user,project
   query		: 
   body			: 

  ###

  userTasksCountInProject: (user,project, params = {}, fn = null) =>
    @debug "Tasks::userTasksCountInProject()"
    @get util.format("user/%s/project/%s/tasks/count_all",user,project), params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: getTaskByLabel
   description	: 查询标签下的任务列表
   path			: user,project,id
   query		: page(integer),pageSize(integer)
   body			: global_key(string)

  ###

  getTaskByLabel: (user,project,id, params = {}, fn = null) =>
    @debug "Tasks::getTaskByLabel()"
    @get util.format("user/%s/project/%s/tasks/label/%s",user,project,id), params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: userTasksOfProject
   description	: 列出当前用户某项目某状态的任务列表
   path			: user,project,status
   query		: page(integer),pageSize(integer)
   body			: 

  ###

  userTasksOfProject: (user,project,status, params = {}, fn = null) =>
    @debug "Tasks::userTasksOfProject()"
    @get util.format("user/%s/project/%s/tasks/my/%s",user,project,status), params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: list_5
   description	: 任务列表
   path			: user,project,status
   query		: page(integer),pageSize(integer)
   body			: key(string)

  ###

  list_5: (user,project,status, params = {}, fn = null) =>
    @debug "Tasks::list_5()"
    @get util.format("user/%s/project/%s/tasks/%s",user,project,status), params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: userTasks
   description	: 当前用户某状态的任务列表
   path			: user,status
   query		: page(integer),pageSize(integer)
   body			: 

  ###

  userTasks: (user,status, params = {}, fn = null) =>
    @debug "Tasks::userTasks()"
    @get util.format("user/%s/projects/tasks/all/%s",user,status), params, (data) ->
      fn data if fn

module.exports = (client) -> new Tasks client

