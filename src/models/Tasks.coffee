
# Generated by gitai 0.1.2

BaseModel = require '../BaseModel'
util = require 'util'

class Tasks extends BaseModel


  ###

   method            : post
   summary         : create
   description    : 创建任务
   path            : project
   query            : owner_id,priority,deadline,description,content,labels,watchers

  ###

  create: (project,params = {}, fn = null) =>
    @debug "Tasks::create()"
    @post "/api/project/#{project}/task", params, (data) ->
      fn data if fn


  ###

   method            : get
   summary         : create
   description    : 创建任务
   path            : project,id
   query            : parseDescription

  ###

  create: (project,id,params = {}, fn = null) =>
    @debug "Tasks::create()"
    @get "/api/project/#{project}/task/#{id}", params, (data) ->
      fn data if fn


  ###

   method            : delete
   summary         : del
   description    : 删除任务
   path            : project,id

  ###

  del: (project,id,fn = null) =>
    @debug "Tasks::del()"
    @delete "/api/project/#{project}/task/#{id}", (data) ->
      fn data if fn


  ###

   method            : get
   summary         : list
   description    : 列出某人的任务列表
   path            : project,owner,status
   query            : page,pageSize
   body            : key

  ###

  list: (project,owner,status,params = {}, fn = null) =>
    @debug "Tasks::list()"
    @get "/api/project/#{project}/tasks/user/#{owner}/#{status}", params, (data) ->
      fn data if fn


  ###

   method            : get
   summary         : create
   description    : 全局任务创建

  ###

  create: (fn = null) =>
    @debug "Tasks::create()"
    @get "/api/task/creating", (data) ->
      fn data if fn


  ###

   method            : get
   summary         : count
   description    : 任务统计信息
   path            : user,project

  ###

  count: (user,project,fn = null) =>
    @debug "Tasks::count()"
    @get "/api/user/#{user}/project/#{project}/task/count", (data) ->
      fn data if fn


  ###

   method            : put
   summary         : update
   description    : 修改任务
   path            : user,project,id
   query            : status,priority,id,owner_id,deadline,description,content

  ###

  update: (user,project,id,params = {}, fn = null) =>
    @debug "Tasks::update()"
    @put "/api/user/#{user}/project/#{project}/task/#{id}", params, (data) ->
      fn data if fn


  ###

   method            : post
   summary         : createComment
   description    : 创建任务评论
   path            : user,project,id
   body            : content

  ###

  createComment: (user,project,id,params = {}, fn = null) =>
    @debug "Tasks::createComment()"
    @post "/api/user/#{user}/project/#{project}/task/#{id}/comment", params, (data) ->
      fn data if fn


  ###

   method            : delete
   summary         : createComment
   description    : 删除任务评论
   path            : user,project,id,commentId

  ###

  createComment: (user,project,id,commentId,fn = null) =>
    @debug "Tasks::createComment()"
    @delete "/api/user/#{user}/project/#{project}/task/#{id}/comment/#{commentId}", (data) ->
      fn data if fn


  ###

   method            : get
   summary         : comment
   description    : 获取任务评论
   path            : user,project,id
   query            : page,pageSize

  ###

  comment: (user,project,id,params = {}, fn = null) =>
    @debug "Tasks::comment()"
    @get "/api/user/#{user}/project/#{project}/task/#{id}/comments", params, (data) ->
      fn data if fn


  ###

   method            : put
   summary         : update
   description    : 修改任务内容
   path            : user,project,id
   query            : content,id

  ###

  update: (user,project,id,params = {}, fn = null) =>
    @debug "Tasks::update()"
    @put "/api/user/#{user}/project/#{project}/task/#{id}/content", params, (data) ->
      fn data if fn


  ###

   method            : put
   summary         : update
   description    : 修改任务截止日期
   path            : user,project,id
   query            : deadline,id

  ###

  update: (user,project,id,params = {}, fn = null) =>
    @debug "Tasks::update()"
    @put "/api/user/#{user}/project/#{project}/task/#{id}/deadline", params, (data) ->
      fn data if fn


  ###

   method            : get
   summary         : watch
   description    : 获取任务描述
   path            : user,project,id

  ###

  watch: (user,project,id,fn = null) =>
    @debug "Tasks::watch()"
    @get "/api/user/#{user}/project/#{project}/task/#{id}/description", (data) ->
      fn data if fn


  ###

   method            : put
   summary         : update
   description    : 修改任务描述
   path            : user,project,id
   query            : description,id

  ###

  update: (user,project,id,params = {}, fn = null) =>
    @debug "Tasks::update()"
    @put "/api/user/#{user}/project/#{project}/task/#{id}/description", params, (data) ->
      fn data if fn


  ###

   method            : post
   summary         : label
   description    : 添加任务标签
   path            : user,project,id,labelId

  ###

  label: (user,project,id,labelId,fn = null) =>
    @debug "Tasks::label()"
    @post "/api/user/#{user}/project/#{project}/task/#{id}/label/#{labelId}", (data) ->
      fn data if fn


  ###

   method            : delete
   summary         : watch
   description    : 删除任务标签
   path            : user,project,id,labelId

  ###

  watch: (user,project,id,labelId,fn = null) =>
    @debug "Tasks::watch()"
    @delete "/api/user/#{user}/project/#{project}/task/#{id}/label/#{labelId}", (data) ->
      fn data if fn


  ###

   method            : post
   summary         : watch
   description    : 批量操作任务标签
   path            : user,project,id
   query            : labelIdStrs

  ###

  watch: (user,project,id,params = {}, fn = null) =>
    @debug "Tasks::watch()"
    @post "/api/user/#{user}/project/#{project}/task/#{id}/labels", params, (data) ->
      fn data if fn


  ###

   method            : put
   summary         : update
   description    : 修改任务执行者
   path            : user,project,id
   query            : owner_id,id

  ###

  update: (user,project,id,params = {}, fn = null) =>
    @debug "Tasks::update()"
    @put "/api/user/#{user}/project/#{project}/task/#{id}/owner", params, (data) ->
      fn data if fn


  ###

   method            : put
   summary         : update
   description    : 修改任务优先级
   path            : user,project,id
   query            : priority,id

  ###

  update: (user,project,id,params = {}, fn = null) =>
    @debug "Tasks::update()"
    @put "/api/user/#{user}/project/#{project}/task/#{id}/priority", params, (data) ->
      fn data if fn


  ###

   method            : put
   summary         : update
   description    : 修改任务状态
   path            : user,project,id
   query            : status,id

  ###

  update: (user,project,id,params = {}, fn = null) =>
    @debug "Tasks::update()"
    @put "/api/user/#{user}/project/#{project}/task/#{id}/status", params, (data) ->
      fn data if fn


  ###

   method            : post
   summary         : watch
   description    : 关注任务
   path            : user,project,id

  ###

  watch: (user,project,id,fn = null) =>
    @debug "Tasks::watch()"
    @post "/api/user/#{user}/project/#{project}/task/#{id}/watch", (data) ->
      fn data if fn


  ###

   method            : delete
   summary         : watch
   description    : 取消任务关注
   path            : user,project,id

  ###

  watch: (user,project,id,fn = null) =>
    @debug "Tasks::watch()"
    @delete "/api/user/#{user}/project/#{project}/task/#{id}/watch", (data) ->
      fn data if fn


  ###

   method            : get
   summary         : getTaskListByLabel
   description    : 关注该任务的用户
   path            : user,project,id
   query            : page,pageSize

  ###

  getTaskListByLabel: (user,project,id,params = {}, fn = null) =>
    @debug "Tasks::getTaskListByLabel()"
    @get "/api/user/#{user}/project/#{project}/task/#{id}/watchers", params, (data) ->
      fn data if fn


  ###

   method            : get
   summary         : count
   description    :  获取当前用户项目的已完成、正在进行的、关注的数值
   path            : user,project

  ###

  count: (user,project,fn = null) =>
    @debug "Tasks::count()"
    @get "/api/user/#{user}/project/#{project}/tasks/count", (data) ->
      fn data if fn


  ###

   method            : get
   summary         : count
   description    : 统计所有 已完成 和 正在处理 的任务数
   path            : user,project

  ###

  count: (user,project,fn = null) =>
    @debug "Tasks::count()"
    @get "/api/user/#{user}/project/#{project}/tasks/count_all", (data) ->
      fn data if fn


  ###

   method            : get
   summary         : getTaskListByLabel
   description    : 查询标签下的任务列表
   path            : user,project,id
   query            : page,pageSize
   body            : user

  ###

  getTaskListByLabel: (user,project,id,params = {}, fn = null) =>
    @debug "Tasks::getTaskListByLabel()"
    @get "/api/user/#{user}/project/#{project}/tasks/label/#{id}", params, (data) ->
      fn data if fn


  ###

   method            : get
   summary         : count
   description    : 列出当前用户某项目某状态的任务列表
   path            : user,project,status
   query            : page,pageSize

  ###

  count: (user,project,status,params = {}, fn = null) =>
    @debug "Tasks::count()"
    @get "/api/user/#{user}/project/#{project}/tasks/my/#{status}", params, (data) ->
      fn data if fn


  ###

   method            : get
   summary         : list
   description    : 任务列表
   path            : user,project,status
   query            : page,pageSize
   body            : key

  ###

  list: (user,project,status,params = {}, fn = null) =>
    @debug "Tasks::list()"
    @get "/api/user/#{user}/project/#{project}/tasks/#{status}", params, (data) ->
      fn data if fn


  ###

   method            : get
   summary         : count
   description    : 当前用户某状态的任务列表
   path            : user,status
   query            : page,pageSize

  ###

  count: (user,status,params = {}, fn = null) =>
    @debug "Tasks::count()"
    @get "/api/user/#{user}/projects/tasks/all/#{status}", params, (data) ->
      fn data if fn



module.exports = (client) -> new Tasks client