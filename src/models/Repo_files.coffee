BaseModel = require '../BaseModel'
util = require 'util'

class Repo_files extends BaseModel

  ###

   method		: get
   operationId	: delete_file
   description	: 删除文件
   path			: user,project,file
   query		: 
   body			: ref(string),path(string)

  ###

  delete_file: (user,project,file, params = {}, fn = null) =>
    @debug "Repo_files::delete_file()"
    @get util.format("user/%s/project/%s/git/delete/%s",user,project,file), params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: edit_file
   description	: 更新文件
   path			: user,project,file
   query		: 
   body			: ref(string),path(string)

  ###

  edit_file: (user,project,file, params = {}, fn = null) =>
    @debug "Repo_files::edit_file()"
    @get util.format("user/%s/project/%s/git/edit/%s",user,project,file), params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: create_file
   description	: 新建文件
   path			: user,project,file
   query		: 
   body			: ref(string),path(string)

  ###

  create_file: (user,project,file, params = {}, fn = null) =>
    @debug "Repo_files::create_file()"
    @get util.format("user/%s/project/%s/git/new/%s",user,project,file), params, (data) ->
      fn data if fn

module.exports = (client) -> new Repo_files client

