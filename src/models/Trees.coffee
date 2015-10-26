BaseModel = require '../BaseModel'
util = require 'util'

class Trees extends BaseModel

  ###

   method		: get
   operationId	: tree
   description	: 目录
   path			: user,project,tree
   query		: 
   body			: currentApp(undefined),ref(string),path(string)

  ###

  tree: (user,project,tree, params = {}, fn = null) =>
    @debug "Trees::tree()"
    @get util.format("user/%s/project/%s/git/tree/%s",user,project,tree), params, (data) ->
      fn data if fn

module.exports = (client) -> new Trees client

