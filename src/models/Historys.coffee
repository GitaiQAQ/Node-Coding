BaseModel = require '../BaseModel'
util = require 'util'

class Historys extends BaseModel

  ###

   method		: get
   operationId	: history
   description	: 获取代码的历史
   path			: user,project,commits
   query		: page(integer),pageSize(integer)
   body			: currentApp(undefined),ref(string),path(string)

  ###

  history: (user,project,commits, params = {}, fn = null) =>
    @debug "Historys::history()"
    @get util.format("user/%s/project/%s/git/commits/%s",user,project,commits), params, (data) ->
      fn data if fn

module.exports = (client) -> new Historys client

