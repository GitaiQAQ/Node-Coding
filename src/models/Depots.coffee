BaseModel = require '../BaseModel'
util = require 'util'

class Depots extends BaseModel

  ###

   method		: get
   operationId	: index
   description	: 获取仓库信息
   path			: user,project
   query		: 
   body			: 

  ###

  index: (user,project, params = {}, fn = null) =>
    @debug "Depots::index()"
    @get util.format("user/%s/project/%s/git",user,project), params, (data) ->
      fn data if fn

  ###

   method		: post
   operationId	: fork
   description	: fork
   path			: user,project
   query		: 
   body			: 

  ###

  fork: (user,project, params = {}, fn = null) =>
    @debug "Depots::fork()"
    @post util.format("user/%s/project/%s/git/fork",user,project), params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: forks
   description	: 项目被fork的列表
   path			: user,project
   query		: 
   body			: 

  ###

  forks: (user,project, params = {}, fn = null) =>
    @debug "Depots::forks()"
    @get util.format("user/%s/project/%s/git/forks",user,project), params, (data) ->
      fn data if fn

  ###

   method		: post
   operationId	: createWebHook
   description	: 创建 webhook
   path			: user,project
   query		: hook_url(string),token(string),type_push(boolean),type_mr_pr(boolean),type_topic(boolean),type_member(boolean),type_comment(boolean),type_document(boolean),type_watch(boolean),type_star(boolean),type_task(boolean)
   body			: 

  ###

  createWebHook: (user,project, params = {}, fn = null) =>
    @debug "Depots::createWebHook()"
    @post util.format("user/%s/project/%s/git/hook",user,project), params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: getWebHook
   description	: 获取 webhook
   path			: user,project,id
   query		: 
   body			: 

  ###

  getWebHook: (user,project,id, params = {}, fn = null) =>
    @debug "Depots::getWebHook()"
    @get util.format("user/%s/project/%s/git/hook/%s",user,project,id), params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: listWebHook
   description	: 列出项目设置的 webhook
   path			: user,project
   query		: 
   body			: 

  ###

  listWebHook: (user,project, params = {}, fn = null) =>
    @debug "Depots::listWebHook()"
    @get util.format("user/%s/project/%s/git/hooks",user,project), params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: importRepo
   description	: 导入仓库
   path			: user,project
   query		: origin_url(string),vcs_type(string)
   body			: 

  ###

  importRepo: (user,project, params = {}, fn = null) =>
    @debug "Depots::importRepo()"
    @get util.format("user/%s/project/%s/git/import",user,project), params, (data) ->
      fn data if fn

  ###

   method		: post
   operationId	: initDepot
   description	: 初始化仓库
   path			: user,project
   query		: type(string),gitReadmeEnabled(string),gitIgnore(string),gitLicense(string),importFrom(string),vcsType(string)
   body			: 

  ###

  initDepot: (user,project, params = {}, fn = null) =>
    @debug "Depots::initDepot()"
    @post util.format("user/%s/project/%s/git/init",user,project), params, (data) ->
      fn data if fn

module.exports = (client) -> new Depots client

