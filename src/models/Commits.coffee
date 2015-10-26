BaseModel = require '../BaseModel'
util = require 'util'

class Commits extends BaseModel

  ###

   method		: get
   operationId	: show
   description	: commit 列表
   path			: user,project,commit
   query		: diff(string),w(string)
   body			: currentApp(undefined),ref(string)

  ###

  show: (user,project,commit, params = {}, fn = null) =>
    @debug "Commits::show()"
    @get util.format("user/%s/project/%s/git/commit/%s",user,project,commit), params, (data) ->
      fn data if fn

module.exports = (client) -> new Commits client

