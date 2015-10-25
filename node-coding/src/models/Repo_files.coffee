BaseModel = require '../BaseModel'
util = require 'util'

class Repo_files extends BaseModel

  ###

   method		: get
   operationId	: delete_fileUsingGET
   description	: 删除文件
   path			: user,project,delete
   query		: 
   body			: ref(string),path(string)

  ###

  delete_fileUsingGET: (user,project,file, params = {}, fn = null) =>
    @debug "Repo_files::delete_fileUsingGET()"
    @get util.format("user/%s/project/%s/git/delete/%s",user,project,file), params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: edit_fileUsingGET
   description	: 更新文件
   path			: user,project,edit
   query		: 
   body			: ref(string),path(string)

  ###

  edit_fileUsingGET: (user,project,file, params = {}, fn = null) =>
    @debug "Repo_files::edit_fileUsingGET()"
    @get util.format("user/%s/project/%s/git/edit/%s",user,project,file), params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: create_fileUsingGET
   description	: 新建文件
   path			: user,project,new
   query		: 
   body			: ref(string),path(string)

  ###

  create_fileUsingGET: (user,project,file, params = {}, fn = null) =>
    @debug "Repo_files::create_fileUsingGET()"
    @get util.format("user/%s/project/%s/git/new/%s",user,project,file), params, (data) ->fn data if fn

module.exports = (client) -> new Repo_files client












