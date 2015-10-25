BaseModel = require '../BaseModel'
util = require 'util'

class Depots extends BaseModel

  ###

   method		: get
   operationId	: indexUsingGET
   description	: 获取仓库信息
   path			: user,project
   query		: 
   body			: 

  ###

  indexUsingGET: (user,project, params = {}, fn = null) =>
    @debug "Depots::indexUsingGET()"
    @get util.format("user/%s/project/%s/git",user,project), params, (data) ->fn data if fn

  ###

   method		: post
   operationId	: forkUsingPOST
   description	: fork
   path			: user,project
   query		: 
   body			: 

  ###

  forkUsingPOST: (user,project, params = {}, fn = null) =>
    @debug "Depots::forkUsingPOST()"
    @post util.format("user/%s/project/%s/git/fork",user,project), params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: forksUsingGET
   description	: 项目被fork的列表
   path			: user,project
   query		: 
   body			: 

  ###

  forksUsingGET: (user,project, params = {}, fn = null) =>
    @debug "Depots::forksUsingGET()"
    @get util.format("user/%s/project/%s/git/forks",user,project), params, (data) ->fn data if fn

  ###

   method		: post
   operationId	: createWebHookUsingPOST
   description	: 创建 webhook
   path			: user,project
   query		: hook_url(string),token(string),type_push(boolean),type_mr_pr(boolean),type_topic(boolean),type_member(boolean),type_comment(boolean),type_document(boolean),type_watch(boolean),type_star(boolean),type_task(boolean)
   body			: 

  ###

  createWebHookUsingPOST: (user,project, params = {}, fn = null) =>
    @debug "Depots::createWebHookUsingPOST()"
    @post util.format("user/%s/project/%s/git/hook",user,project), params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: getWebHookUsingGET
   description	: 获取 webhook
   path			: user,project,id
   query		: 
   body			: 

  ###

  getWebHookUsingGET: (user,project,id, params = {}, fn = null) =>
    @debug "Depots::getWebHookUsingGET()"
    @get util.format("user/%s/project/%s/git/hook/%s",user,project,id), params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: listWebHookUsingGET
   description	: 列出项目设置的 webhook
   path			: user,project
   query		: 
   body			: 

  ###

  listWebHookUsingGET: (user,project, params = {}, fn = null) =>
    @debug "Depots::listWebHookUsingGET()"
    @get util.format("user/%s/project/%s/git/hooks",user,project), params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: importRepoUsingGET
   description	: 导入仓库
   path			: user,project
   query		: origin_url(string),vcs_type(string)
   body			: 

  ###

  importRepoUsingGET: (user,project, params = {}, fn = null) =>
    @debug "Depots::importRepoUsingGET()"
    @get util.format("user/%s/project/%s/git/import",user,project), params, (data) ->fn data if fn

  ###

   method		: post
   operationId	: initDepotUsingPOST
   description	: 初始化仓库
   path			: user,project
   query		: type(string),gitReadmeEnabled(string),gitIgnore(string),gitLicense(string),importFrom(string),vcsType(string)
   body			: 

  ###

  initDepotUsingPOST: (user,project, params = {}, fn = null) =>
    @debug "Depots::initDepotUsingPOST()"
    @post util.format("user/%s/project/%s/git/init",user,project), params, (data) ->fn data if fn

module.exports = (client) -> new Depots client












