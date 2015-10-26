BaseModel = require '../BaseModel'
util = require 'util'

class Tags extends BaseModel

  ###

   method		: get
   operationId	: list_4
   description	: 标签列表
   path			: user,project
   query		: page(integer),pageSize(integer)
   body			: 

  ###

  list_4: (user,project, params = {}, fn = null) =>
    @debug "Tags::list_4()"
    @get util.format("user/%s/project/%s/git/tags",user,project), params, (data) ->
      fn data if fn

  ###

   method		: post
   operationId	: createTag
   description	: 创建标签
   path			: user,project
   query		: tag_name(string),tag_point(string),message(string)
   body			: 

  ###

  createTag: (user,project, params = {}, fn = null) =>
    @debug "Tags::createTag()"
    @post util.format("user/%s/project/%s/git/tags/create",user,project), params, (data) ->
      fn data if fn

  ###

   method		: post
   operationId	: deleteTag
   description	: 删除标签
   path			: user,project
   query		: tag_name(string)
   body			: 

  ###

  deleteTag: (user,project, params = {}, fn = null) =>
    @debug "Tags::deleteTag()"
    @post util.format("user/%s/project/%s/git/tags/delete",user,project), params, (data) ->
      fn data if fn

module.exports = (client) -> new Tags client

