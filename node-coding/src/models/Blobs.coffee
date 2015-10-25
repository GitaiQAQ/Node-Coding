BaseModel = require '../BaseModel'
util = require 'util'

class Blobs extends BaseModel

  ###

   method		: get
   operationId	: blobUsingGET
   description	: 获取 blob
   path			: user,project,blob
   query		: 
   body			: currentApp(undefined),ref(string),path(string)

  ###

  blobUsingGET: (user,project,blob, params = {}, fn = null) =>
    @debug "Blobs::blobUsingGET()"
    @get util.format("user/%s/project/%s/git/blob/%s",user,project,blob), params, (data) ->fn data if fn

module.exports = (client) -> new Blobs client












