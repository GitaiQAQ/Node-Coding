BaseModel = require '../BaseModel'
util = require 'util'

class Keys extends BaseModel

  ###

   method		: get
   operationId	: showUsingGET_1
   description	: 通过KeyId获取个人公钥
   path			: global_key,keyId
   query		: 
   body			: 

  ###

  showUsingGET_1: (global_key,keyId, params = {}, fn = null) =>
    @debug "Keys::showUsingGET_1()"
    @get util.format("user/%s/key/%s",global_key,keyId), params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: listUsingGET_1
   description	: 列出个人公钥
   path			: global_key
   query		: withIDEKey(boolean)
   body			: 

  ###

  listUsingGET_1: (global_key, params = {}, fn = null) =>
    @debug "Keys::listUsingGET_1()"
    @get util.format("user/%s/keys",global_key), params, (data) ->fn data if fn

  ###

   method		: post
   operationId	: bindDeployKeyUsingPOST
   description	: 绑定部署公钥
   path			: global_key,project,id
   query		: 
   body			: 

  ###

  bindDeployKeyUsingPOST: (global_key,project,id, params = {}, fn = null) =>
    @debug "Keys::bindDeployKeyUsingPOST()"
    @post util.format("user/%s/project/%s/git/bind_deploy_key/%s",global_key,project,id), params, (data) ->fn data if fn

  ###

   method		: post
   operationId	: saveDeployKeyUsingPOST
   description	: 新建部署公钥
   path			: global_key,project
   query		: title(string),content(string)
   body			: 

  ###

  saveDeployKeyUsingPOST: (global_key,project, params = {}, fn = null) =>
    @debug "Keys::saveDeployKeyUsingPOST()"
    @post util.format("user/%s/project/%s/git/deploy_key",global_key,project), params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: listDeployKeysUsingGET
   description	: 列出部署公钥
   path			: global_key,project
   query		: 
   body			: 

  ###

  listDeployKeysUsingGET: (global_key,project, params = {}, fn = null) =>
    @debug "Keys::listDeployKeysUsingGET()"
    @get util.format("user/%s/project/%s/git/deploy_keys",global_key,project), params, (data) ->fn data if fn

  ###

   method		: post
   operationId	: unBindDeployKeyUsingPOST
   description	: 解绑部署公钥
   path			: global_key,project,id
   query		: 
   body			: 

  ###

  unBindDeployKeyUsingPOST: (global_key,project,id, params = {}, fn = null) =>
    @debug "Keys::unBindDeployKeyUsingPOST()"
    @post util.format("user/%s/project/%s/git/unbind_deploy_key/%s",global_key,project,id), params, (data) ->fn data if fn

module.exports = (client) -> new Keys client












