BaseModel = require '../BaseModel'
util = require 'util'

class Historys extends BaseModel

  ###

   method		: get
   operationId	: historyUsingGET
   description	: 获取代码的历史
   path			: user,project,commits
   query		: page(integer),pageSize(integer)
   body			: currentApp(undefined),ref(string),path(string)

  ###

  historyUsingGET: (user,project,commits, params = {}, fn = null) =>
    @debug "Historys::historyUsingGET()"
    @get util.format("user/%s/project/%s/git/commits/%s",user,project,commits), params, (data) ->fn data if fn

module.exports = (client) -> new Historys client












