BaseModel = require '../BaseModel'
util = require 'util'

class Projects extends BaseModel

  ###

   method		: get
   operationId	: getPinProjects
   description	: 获取常用项目列表
   path			: 
   query		: page(integer),pageSize(integer)
   body			: 

  ###

  getPinProjects: ( params = {}, fn = null) =>
    @debug "Projects::getPinProjects()"
    @get "account/projects/pin", params, (data) ->
      fn data if fn

  ###

   method		: put
   operationId	: update_1
   description	: 更新项目信息
   path			: 
   query		: id(string),name(string),description(string)
   body			: 

  ###

  update_1: ( params = {}, fn = null) =>
    @debug "Projects::update_1()"
    @put "project", params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: recommendedList
   description	: 推荐项目list
   path			: 
   query		: 
   body			: 

  ###

  recommendedList: ( params = {}, fn = null) =>
    @debug "Projects::recommendedList()"
    @get "projects/recommended", params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: publicProject
   description	: 公有项目列表
   path			: 
   query		: page(integer),pageSize(integer)
   body			: 

  ###

  publicProject: ( params = {}, fn = null) =>
    @debug "Projects::publicProject()"
    @get "public/all", params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: queryByName
   description	: 通过名称查询
   path			: user,project
   query		: 
   body			: 

  ###

  queryByName: (user,project, params = {}, fn = null) =>
    @debug "Projects::queryByName()"
    @get util.format("user/%s/project/%s",user,project), params, (data) ->
      fn data if fn

  ###

   method		: post
   operationId	: setProjectIcon
   description	: 设置项目图标
   path			: user,project
   query		: 
   body			: 

  ###

  setProjectIcon: (user,project, params = {}, fn = null) =>
    @debug "Projects::setProjectIcon()"
    @post util.format("user/%s/project/%s/project_icon",user,project), params, (data) ->
      fn data if fn

  ###

   method		: post
   operationId	: star
   description	: 收藏项目
   path			: user,project
   query		: 
   body			: 

  ###

  star: (user,project, params = {}, fn = null) =>
    @debug "Projects::star()"
    @post util.format("user/%s/project/%s/star",user,project), params, (data) ->
      fn data if fn

  ###

   method		: post
   operationId	: stared
   description	: 项目是否被收藏
   path			: user,project
   query		: 
   body			: 

  ###

  stared: (user,project, params = {}, fn = null) =>
    @debug "Projects::stared()"
    @post util.format("user/%s/project/%s/stared",user,project), params, (data) ->
      fn data if fn

  ###

   method		: post
   operationId	: unstar
   description	: 项目取消收藏
   path			: user,project
   query		: 
   body			: 

  ###

  unstar: (user,project, params = {}, fn = null) =>
    @debug "Projects::unstar()"
    @post util.format("user/%s/project/%s/unstar",user,project), params, (data) ->
      fn data if fn

  ###

   method		: post
   operationId	: unwatch
   description	: 项目取消关注
   path			: user,project
   query		: 
   body			: 

  ###

  unwatch: (user,project, params = {}, fn = null) =>
    @debug "Projects::unwatch()"
    @post util.format("user/%s/project/%s/unwatch",user,project), params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: visitProject
   description	: 更新项目阅读时间
   path			: user,project
   query		: 
   body			: 

  ###

  visitProject: (user,project, params = {}, fn = null) =>
    @debug "Projects::visitProject()"
    @get util.format("user/%s/project/%s/update_visit",user,project), params, (data) ->
      fn data if fn

  ###

   method		: post
   operationId	: watch
   description	: 关注项目
   path			: user,project
   query		: 
   body			: 

  ###

  watch: (user,project, params = {}, fn = null) =>
    @debug "Projects::watch()"
    @post util.format("user/%s/project/%s/watch",user,project), params, (data) ->
      fn data if fn

  ###

   method		: post
   operationId	: watched
   description	: 项目是否被关注
   path			: user,project
   query		: 
   body			: 

  ###

  watched: (user,project, params = {}, fn = null) =>
    @debug "Projects::watched()"
    @post util.format("user/%s/project/%s/watched",user,project), params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: watchers
   description	: 项目关注者
   path			: user,project
   query		: 
   body			: 

  ###

  watchers: (user,project, params = {}, fn = null) =>
    @debug "Projects::watchers()"
    @get util.format("user/%s/project/%s/watchers",user,project), params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: project_list
   description	: 我的项目列表
   path			: 
   query		: type(string),sort(string),page(integer),pageSize(integer)
   body			: 

  ###

  project_list: ( params = {}, fn = null) =>
    @debug "Projects::project_list()"
    @get "user/projects", params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: private_projects
   description	: 私有项目列表
   path			: 
   query		: type(string),page(integer),pageSize(integer)
   body			: 

  ###

  private_projects: ( params = {}, fn = null) =>
    @debug "Projects::private_projects()"
    @get "user/projects/private", params, (data) ->
      fn data if fn

  ###

   method		: post
   operationId	: createProject
   description	: 创建项目
   path			: global_key
   query		: 
   body			: 

  ###

  createProject: (global_key, params = {}, fn = null) =>
    @debug "Projects::createProject()"
    @post util.format("user/%s/project",global_key), params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: public_projects
   description	: 公有项目列表
   path			: global_key
   query		: type(string),page(integer),pageSize(integer)
   body			: 

  ###

  public_projects: (global_key, params = {}, fn = null) =>
    @debug "Projects::public_projects()"
    @get util.format("user/%s/projects/public",global_key), params, (data) ->
      fn data if fn

module.exports = (client) -> new Projects client

