BaseModel = require '../BaseModel'
util = require 'util'

class Tasks extends BaseModel

  ###

   method		: post
   operationId	: createUsingPOST
   description	: 创建任务
   path			: project
   query		: owner_id(string),priority(integer),deadline(string),description(string),content(string),labels(string),watchers(string)
   body			: 

  ###

  createUsingPOST: (project, params = {}, fn = null) =>
    @debug "Tasks::createUsingPOST()"
    @post util.format("project/%s/task",project), params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: getTaskUsingGET
   description	: 创建任务
   path			: project,id
   query		: parseDescription(boolean)
   body			: 

  ###

  getTaskUsingGET: (project,id, params = {}, fn = null) =>
    @debug "Tasks::getTaskUsingGET()"
    @get util.format("project/%s/task/%s",project,id), params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: listOfOwnerUsingGET
   description	: 列出某人的任务列表
   path			: project,owner,status
   query		: page(integer),pageSize(integer)
   body			: key(string)

  ###

  listOfOwnerUsingGET: (project,owner,status, params = {}, fn = null) =>
    @debug "Tasks::listOfOwnerUsingGET()"
    @get util.format("project/%s/tasks/user/%s/%s",project,owner,status), params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: taskCreatingUsingGET
   description	: 全局任务创建
   path			: 
   query		: 
   body			: 

  ###

  taskCreatingUsingGET: ( params = {}, fn = null) =>
    @debug "Tasks::taskCreatingUsingGET()"
    @get "task/creating", params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: taskCountByUserUsingGET
   description	: 任务统计信息
   path			: user,project
   query		: 
   body			: 

  ###

  taskCountByUserUsingGET: (user,project, params = {}, fn = null) =>
    @debug "Tasks::taskCountByUserUsingGET()"
    @get util.format("user/%s/project/%s/task/count",user,project), params, (data) ->fn data if fn

  ###

   method		: put
   operationId	: update4clientUsingPUT
   description	: 修改任务
   path			: user,project,id
   query		: status(integer),priority(integer),id(integer),owner_id(integer),deadline(string),description(string),content(string)
   body			: 

  ###

  update4clientUsingPUT: (user,project,id, params = {}, fn = null) =>
    @debug "Tasks::update4clientUsingPUT()"
    @put util.format("user/%s/project/%s/task/%s",user,project,id), params, (data) ->fn data if fn

  ###

   method		: post
   operationId	: pubCommentUsingPOST
   description	: 创建任务评论
   path			: user,project,id
   query		: 
   body			: content(string)

  ###

  pubCommentUsingPOST: (user,project,id, params = {}, fn = null) =>
    @debug "Tasks::pubCommentUsingPOST()"
    @post util.format("user/%s/project/%s/task/%s/comment",user,project,id), params, (data) ->fn data if fn

  ###

   method		: delete
   operationId	: deleteCommentUsingDELETE
   description	: 删除任务评论
   path			: user,project,id,commentId
   query		: 
   body			: 

  ###

  deleteCommentUsingDELETE: (user,project,id,commentId, params = {}, fn = null) =>
    @debug "Tasks::deleteCommentUsingDELETE()"
    @delete util.format("user/%s/project/%s/task/%s/comment/%s",user,project,id,commentId), params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: getCommentsUsingGET
   description	: 获取任务评论
   path			: user,project,id
   query		: page(integer),pageSize(integer)
   body			: 

  ###

  getCommentsUsingGET: (user,project,id, params = {}, fn = null) =>
    @debug "Tasks::getCommentsUsingGET()"
    @get util.format("user/%s/project/%s/task/%s/comments",user,project,id), params, (data) ->fn data if fn

  ###

   method		: put
   operationId	: updateContentUsingPUT
   description	: 修改任务内容
   path			: user,project,id
   query		: content(string),id(integer)
   body			: 

  ###

  updateContentUsingPUT: (user,project,id, params = {}, fn = null) =>
    @debug "Tasks::updateContentUsingPUT()"
    @put util.format("user/%s/project/%s/task/%s/content",user,project,id), params, (data) ->fn data if fn

  ###

   method		: put
   operationId	: updateDeadlineUsingPUT
   description	: 修改任务截止日期
   path			: user,project,id
   query		: deadline(string),id(integer)
   body			: 

  ###

  updateDeadlineUsingPUT: (user,project,id, params = {}, fn = null) =>
    @debug "Tasks::updateDeadlineUsingPUT()"
    @put util.format("user/%s/project/%s/task/%s/deadline",user,project,id), params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: getDescriptionUsingGET
   description	: 获取任务描述
   path			: user,project,id
   query		: 
   body			: 

  ###

  getDescriptionUsingGET: (user,project,id, params = {}, fn = null) =>
    @debug "Tasks::getDescriptionUsingGET()"
    @get util.format("user/%s/project/%s/task/%s/description",user,project,id), params, (data) ->fn data if fn

  ###

   method		: post
   operationId	: addTaskLabelUsingPOST
   description	: 添加任务标签
   path			: user,project,id,labelId
   query		: 
   body			: 

  ###

  addTaskLabelUsingPOST: (user,project,id,labelId, params = {}, fn = null) =>
    @debug "Tasks::addTaskLabelUsingPOST()"
    @post util.format("user/%s/project/%s/task/%s/label/%s",user,project,id,labelId), params, (data) ->fn data if fn

  ###

   method		: post
   operationId	: operateTaskLabelsUsingPOST
   description	: 批量操作任务标签
   path			: user,project,id
   query		: label_id(string)
   body			: 

  ###

  operateTaskLabelsUsingPOST: (user,project,id, params = {}, fn = null) =>
    @debug "Tasks::operateTaskLabelsUsingPOST()"
    @post util.format("user/%s/project/%s/task/%s/labels",user,project,id), params, (data) ->fn data if fn

  ###

   method		: put
   operationId	: updateOwnerUsingPUT
   description	: 修改任务执行者
   path			: user,project,id
   query		: owner_id(integer),id(integer)
   body			: 

  ###

  updateOwnerUsingPUT: (user,project,id, params = {}, fn = null) =>
    @debug "Tasks::updateOwnerUsingPUT()"
    @put util.format("user/%s/project/%s/task/%s/owner",user,project,id), params, (data) ->fn data if fn

  ###

   method		: put
   operationId	: updatePriorityUsingPUT
   description	: 修改任务优先级
   path			: user,project,id
   query		: priority(integer),id(integer)
   body			: 

  ###

  updatePriorityUsingPUT: (user,project,id, params = {}, fn = null) =>
    @debug "Tasks::updatePriorityUsingPUT()"
    @put util.format("user/%s/project/%s/task/%s/priority",user,project,id), params, (data) ->fn data if fn

  ###

   method		: put
   operationId	: updateStatusUsingPUT
   description	: 修改任务状态
   path			: user,project,id
   query		: status(integer),id(integer)
   body			: 

  ###

  updateStatusUsingPUT: (user,project,id, params = {}, fn = null) =>
    @debug "Tasks::updateStatusUsingPUT()"
    @put util.format("user/%s/project/%s/task/%s/status",user,project,id), params, (data) ->fn data if fn

  ###

   method		: post
   operationId	: watchUsingPOST_2
   description	: 关注任务
   path			: user,project,id
   query		: 
   body			: 

  ###

  watchUsingPOST_2: (user,project,id, params = {}, fn = null) =>
    @debug "Tasks::watchUsingPOST_2()"
    @post util.format("user/%s/project/%s/task/%s/watch",user,project,id), params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: pageTaskWatchersUsingGET
   description	: 关注该任务的用户
   path			: user,project,id
   query		: page(integer),pageSize(integer)
   body			: 

  ###

  pageTaskWatchersUsingGET: (user,project,id, params = {}, fn = null) =>
    @debug "Tasks::pageTaskWatchersUsingGET()"
    @get util.format("user/%s/project/%s/task/%s/watchers",user,project,id), params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: userTasksCountUsingGET
   description	:  获取当前用户项目的已完成、正在进行的、关注的数值
   path			: user,project
   query		: 
   body			: 

  ###

  userTasksCountUsingGET: (user,project, params = {}, fn = null) =>
    @debug "Tasks::userTasksCountUsingGET()"
    @get util.format("user/%s/project/%s/tasks/count",user,project), params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: userTasksCountInProjectUsingGET
   description	: 统计所有 已完成 和 正在处理 的任务数
   path			: user,project
   query		: 
   body			: 

  ###

  userTasksCountInProjectUsingGET: (user,project, params = {}, fn = null) =>
    @debug "Tasks::userTasksCountInProjectUsingGET()"
    @get util.format("user/%s/project/%s/tasks/count_all",user,project), params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: getTaskByLabelUsingGET
   description	: 查询标签下的任务列表
   path			: user,project,id
   query		: page(integer),pageSize(integer)
   body			: global_key(string)

  ###

  getTaskByLabelUsingGET: (user,project,id, params = {}, fn = null) =>
    @debug "Tasks::getTaskByLabelUsingGET()"
    @get util.format("user/%s/project/%s/tasks/label/%s",user,project,id), params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: userTasksOfProjectUsingGET
   description	: 列出当前用户某项目某状态的任务列表
   path			: user,project,status
   query		: page(integer),pageSize(integer)
   body			: 

  ###

  userTasksOfProjectUsingGET: (user,project,status, params = {}, fn = null) =>
    @debug "Tasks::userTasksOfProjectUsingGET()"
    @get util.format("user/%s/project/%s/tasks/my/%s",user,project,status), params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: listUsingGET_5
   description	: 任务列表
   path			: user,project,status
   query		: page(integer),pageSize(integer)
   body			: key(string)

  ###

  listUsingGET_5: (user,project,status, params = {}, fn = null) =>
    @debug "Tasks::listUsingGET_5()"
    @get util.format("user/%s/project/%s/tasks/%s",user,project,status), params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: userTasksUsingGET
   description	: 当前用户某状态的任务列表
   path			: user,status
   query		: page(integer),pageSize(integer)
   body			: 

  ###

  userTasksUsingGET: (user,status, params = {}, fn = null) =>
    @debug "Tasks::userTasksUsingGET()"
    @get util.format("user/%s/projects/tasks/all/%s",user,status), params, (data) ->fn data if fn

module.exports = (client) -> new Tasks client












