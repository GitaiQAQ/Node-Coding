BaseModel = require '../BaseModel'
util = require 'util'

class Merge_requests extends BaseModel

  ###

   method		: post
   operationId	: do_create
   description	: 创建 MergeRequest
   path			: user,project
   query		: srcBranch(string),desBranch(string),title(string),content(string),reviewers(string),tasks(string)
   body			: 

  ###

  do_create: (user,project, params = {}, fn = null) =>
    @debug "Merge_requests::do_create()"
    @post util.format("user/%s/project/%s/git/merge",user,project), params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: show_2
   description	: 显示某个 MergeRequest
   path			: user,project,iid
   query		: diff(string)
   body			: 

  ###

  show_2: (user,project,iid, params = {}, fn = null) =>
    @debug "Merge_requests::show_2()"
    @get util.format("user/%s/project/%s/git/merge/%s",user,project,iid), params, (data) ->
      fn data if fn

  ###

   method		: post
   operationId	: cancel
   description	: 取消 MergeRequest
   path			: user,project,iid
   query		: 
   body			: 

  ###

  cancel: (user,project,iid, params = {}, fn = null) =>
    @debug "Merge_requests::cancel()"
    @post util.format("user/%s/project/%s/git/merge/%s/cancel",user,project,iid), params, (data) ->
      fn data if fn

  ###

   method		: post
   operationId	: merge
   description	: 合并某个 MergeRequest
   path			: user,project,iid
   query		: message(string),del_source_branch(boolean)
   body			: 

  ###

  merge: (user,project,iid, params = {}, fn = null) =>
    @debug "Merge_requests::merge()"
    @post util.format("user/%s/project/%s/git/merge/%s/merge",user,project,iid), params, (data) ->
      fn data if fn

  ###

   method		: post
   operationId	: refuse
   description	: 拒绝某个 MergeRequest
   path			: user,project,iid
   query		: 
   body			: 

  ###

  refuse: (user,project,iid, params = {}, fn = null) =>
    @debug "Merge_requests::refuse()"
    @post util.format("user/%s/project/%s/git/merge/%s/refuse",user,project,iid), params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: list_2
   description	: MergeRequest 列表
   path			: user,project,status
   query		: page(integer),pageSize(integer)
   body			: 

  ###

  list_2: (user,project,status, params = {}, fn = null) =>
    @debug "Merge_requests::list_2()"
    @get util.format("user/%s/project/%s/git/merges/%s",user,project,status), params, (data) ->
      fn data if fn

module.exports = (client) -> new Merge_requests client

