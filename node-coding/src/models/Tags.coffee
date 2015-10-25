BaseModel = require '../BaseModel'
util = require 'util'

class Tags extends BaseModel

  ###

   method		: get
   operationId	: listUsingGET_4
   description	: 标签列表
   path			: user,project
   query		: page(integer),pageSize(integer)
   body			: 

  ###

  listUsingGET_4: (user,project, params = {}, fn = null) =>
    @debug "Tags::listUsingGET_4()"
    @get util.format("user/%s/project/%s/git/tags",user,project), params, (data) ->fn data if fn

  ###

   method		: post
   operationId	: createTagUsingPOST
   description	: 创建标签
   path			: user,project
   query		: tag_name(string),tag_point(string),message(string)
   body			: 

  ###

  createTagUsingPOST: (user,project, params = {}, fn = null) =>
    @debug "Tags::createTagUsingPOST()"
    @post util.format("user/%s/project/%s/git/tags/create",user,project), params, (data) ->fn data if fn

  ###

   method		: post
   operationId	: deleteTagUsingPOST
   description	: 删除标签
   path			: user,project
   query		: tag_name(string)
   body			: 

  ###

  deleteTagUsingPOST: (user,project, params = {}, fn = null) =>
    @debug "Tags::deleteTagUsingPOST()"
    @post util.format("user/%s/project/%s/git/tags/delete",user,project), params, (data) ->fn data if fn

module.exports = (client) -> new Tags client












