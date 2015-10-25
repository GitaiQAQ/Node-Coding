BaseModel = require '../BaseModel'
util = require 'util'

class Projects extends BaseModel

  ###

   method		: get
   operationId	: getPinProjectsUsingGET
   description	: 获取常用项目列表
   path			: 
   query		: page(integer),pageSize(integer)
   body			: 

  ###

  getPinProjectsUsingGET: ( params = {}, fn = null) =>
    @debug "Projects::getPinProjectsUsingGET()"
    @get "account/projects/pin", params, (data) ->fn data if fn

  ###

   method		: put
   operationId	: updateUsingPUT_1
   description	: 更新项目信息
   path			: 
   query		: id(string),name(string),description(string)
   body			: 

  ###

  updateUsingPUT_1: ( params = {}, fn = null) =>
    @debug "Projects::updateUsingPUT_1()"
    @put "project", params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: recommendedListUsingGET
   description	: 推荐项目list
   path			: 
   query		: 
   body			: 

  ###

  recommendedListUsingGET: ( params = {}, fn = null) =>
    @debug "Projects::recommendedListUsingGET()"
    @get "projects/recommended", params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: publicProjectUsingGET
   description	: 公有项目列表
   path			: 
   query		: page(integer),pageSize(integer)
   body			: 

  ###

  publicProjectUsingGET: ( params = {}, fn = null) =>
    @debug "Projects::publicProjectUsingGET()"
    @get "public/all", params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: queryByNameUsingGET
   description	: 通过名称查询
   path			: user,project
   query		: 
   body			: 

  ###

  queryByNameUsingGET: (user,project, params = {}, fn = null) =>
    @debug "Projects::queryByNameUsingGET()"
    @get util.format("user/%s/project/%s",user,project), params, (data) ->fn data if fn

  ###

   method		: post
   operationId	: setProjectIconUsingPOST
   description	: 设置项目图标
   path			: user,project
   query		: 
   body			: 

  ###

  setProjectIconUsingPOST: (user,project, params = {}, fn = null) =>
    @debug "Projects::setProjectIconUsingPOST()"
    @post util.format("user/%s/project/%s/project_icon",user,project), params, (data) ->fn data if fn

  ###

   method		: post
   operationId	: starUsingPOST
   description	: 收藏项目
   path			: user,project
   query		: 
   body			: 

  ###

  starUsingPOST: (user,project, params = {}, fn = null) =>
    @debug "Projects::starUsingPOST()"
    @post util.format("user/%s/project/%s/star",user,project), params, (data) ->fn data if fn

  ###

   method		: post
   operationId	: staredUsingPOST
   description	: 项目是否被收藏
   path			: user,project
   query		: 
   body			: 

  ###

  staredUsingPOST: (user,project, params = {}, fn = null) =>
    @debug "Projects::staredUsingPOST()"
    @post util.format("user/%s/project/%s/stared",user,project), params, (data) ->fn data if fn

  ###

   method		: post
   operationId	: unstarUsingPOST
   description	: 项目取消收藏
   path			: user,project
   query		: 
   body			: 

  ###

  unstarUsingPOST: (user,project, params = {}, fn = null) =>
    @debug "Projects::unstarUsingPOST()"
    @post util.format("user/%s/project/%s/unstar",user,project), params, (data) ->fn data if fn

  ###

   method		: post
   operationId	: unwatchUsingPOST
   description	: 项目取消关注
   path			: user,project
   query		: 
   body			: 

  ###

  unwatchUsingPOST: (user,project, params = {}, fn = null) =>
    @debug "Projects::unwatchUsingPOST()"
    @post util.format("user/%s/project/%s/unwatch",user,project), params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: visitProjectUsingGET
   description	: 更新项目阅读时间
   path			: user,project
   query		: 
   body			: 

  ###

  visitProjectUsingGET: (user,project, params = {}, fn = null) =>
    @debug "Projects::visitProjectUsingGET()"
    @get util.format("user/%s/project/%s/update_visit",user,project), params, (data) ->fn data if fn

  ###

   method		: post
   operationId	: watchUsingPOST
   description	: 关注项目
   path			: user,project
   query		: 
   body			: 

  ###

  watchUsingPOST: (user,project, params = {}, fn = null) =>
    @debug "Projects::watchUsingPOST()"
    @post util.format("user/%s/project/%s/watch",user,project), params, (data) ->fn data if fn

  ###

   method		: post
   operationId	: watchedUsingPOST
   description	: 项目是否被关注
   path			: user,project
   query		: 
   body			: 

  ###

  watchedUsingPOST: (user,project, params = {}, fn = null) =>
    @debug "Projects::watchedUsingPOST()"
    @post util.format("user/%s/project/%s/watched",user,project), params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: watchersUsingGET
   description	: 项目关注者
   path			: user,project
   query		: 
   body			: 

  ###

  watchersUsingGET: (user,project, params = {}, fn = null) =>
    @debug "Projects::watchersUsingGET()"
    @get util.format("user/%s/project/%s/watchers",user,project), params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: project_listUsingGET
   description	: 我的项目列表
   path			: 
   query		: type(string),sort(string),page(integer),pageSize(integer)
   body			: 

  ###

  project_listUsingGET: ( params = {}, fn = null) =>
    @debug "Projects::project_listUsingGET()"
    @get "user/projects", params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: private_projectsUsingGET
   description	: 私有项目列表
   path			: 
   query		: type(string),page(integer),pageSize(integer)
   body			: 

  ###

  private_projectsUsingGET: ( params = {}, fn = null) =>
    @debug "Projects::private_projectsUsingGET()"
    @get "user/projects/private", params, (data) ->fn data if fn

  ###

   method		: post
   operationId	: createProjectUsingPOST
   description	: 创建项目
   path			: global_key
   query		: 
   body			: 

  ###

  createProjectUsingPOST: (global_key, params = {}, fn = null) =>
    @debug "Projects::createProjectUsingPOST()"
    @post util.format("user/%s/project",global_key), params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: public_projectsUsingGET
   description	: 公有项目列表
   path			: global_key
   query		: type(string),page(integer),pageSize(integer)
   body			: 

  ###

  public_projectsUsingGET: (global_key, params = {}, fn = null) =>
    @debug "Projects::public_projectsUsingGET()"
    @get util.format("user/%s/projects/public",global_key), params, (data) ->fn data if fn

module.exports = (client) -> new Projects client












