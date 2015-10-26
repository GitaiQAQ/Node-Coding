BaseModel = require '../BaseModel'
util = require 'util'

class Keys extends BaseModel

  ###

   method		: get
   operationId	: show_1
   description	: 通过KeyId获取个人公钥
   path			: global_key,keyId
   query		: 
   body			: 

  ###

  show_1: (global_key,keyId, params = {}, fn = null) =>
    @debug "Keys::show_1()"
    @get util.format("user/%s/key/%s",global_key,keyId), params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: list_1
   description	: 列出个人公钥
   path			: global_key
   query		: withIDEKey(boolean)
   body			: 

  ###

  list_1: (global_key, params = {}, fn = null) =>
    @debug "Keys::list_1()"
    @get util.format("user/%s/keys",global_key), params, (data) ->
      fn data if fn

  ###

   method		: post
   operationId	: bindDeployKey
   description	: 绑定部署公钥
   path			: global_key,project,id
   query		: 
   body			: 

  ###

  bindDeployKey: (global_key,project,id, params = {}, fn = null) =>
    @debug "Keys::bindDeployKey()"
    @post util.format("user/%s/project/%s/git/bind_deploy_key/%s",global_key,project,id), params, (data) ->
      fn data if fn

  ###

   method		: post
   operationId	: saveDeployKey
   description	: 新建部署公钥
   path			: global_key,project
   query		: title(string),content(string)
   body			: 

  ###

  saveDeployKey: (global_key,project, params = {}, fn = null) =>
    @debug "Keys::saveDeployKey()"
    @post util.format("user/%s/project/%s/git/deploy_key",global_key,project), params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: listDeployKeys
   description	: 列出部署公钥
   path			: global_key,project
   query		: 
   body			: 

  ###

  listDeployKeys: (global_key,project, params = {}, fn = null) =>
    @debug "Keys::listDeployKeys()"
    @get util.format("user/%s/project/%s/git/deploy_keys",global_key,project), params, (data) ->
      fn data if fn

  ###

   method		: post
   operationId	: unBindDeployKey
   description	: 解绑部署公钥
   path			: global_key,project,id
   query		: 
   body			: 

  ###

  unBindDeployKey: (global_key,project,id, params = {}, fn = null) =>
    @debug "Keys::unBindDeployKey()"
    @post util.format("user/%s/project/%s/git/unbind_deploy_key/%s",global_key,project,id), params, (data) ->
      fn data if fn

module.exports = (client) -> new Keys client

