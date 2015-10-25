BaseModel = require '../BaseModel'
util = require 'util'

class Merge_requests extends BaseModel

  ###

   method		: post
   operationId	: do_createUsingPOST
   description	: 创建 MergeRequest
   path			: user,project
   query		: srcBranch(string),desBranch(string),title(string),content(string),reviewers(string),tasks(string)
   body			: 

  ###

  do_createUsingPOST: (user,project, params = {}, fn = null) =>
    @debug "Merge_requests::do_createUsingPOST()"
    @post util.format("user/%s/project/%s/git/merge",user,project), params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: showUsingGET_2
   description	: 显示某个 MergeRequest
   path			: user,project,iid
   query		: diff(string)
   body			: 

  ###

  showUsingGET_2: (user,project,iid, params = {}, fn = null) =>
    @debug "Merge_requests::showUsingGET_2()"
    @get util.format("user/%s/project/%s/git/merge/%s",user,project,iid), params, (data) ->fn data if fn

  ###

   method		: post
   operationId	: cancelUsingPOST
   description	: 取消 MergeRequest
   path			: user,project,iid
   query		: 
   body			: 

  ###

  cancelUsingPOST: (user,project,iid, params = {}, fn = null) =>
    @debug "Merge_requests::cancelUsingPOST()"
    @post util.format("user/%s/project/%s/git/merge/%s/cancel",user,project,iid), params, (data) ->fn data if fn

  ###

   method		: post
   operationId	: mergeUsingPOST
   description	: 合并某个 MergeRequest
   path			: user,project,iid
   query		: message(string),del_source_branch(boolean)
   body			: 

  ###

  mergeUsingPOST: (user,project,iid, params = {}, fn = null) =>
    @debug "Merge_requests::mergeUsingPOST()"
    @post util.format("user/%s/project/%s/git/merge/%s/merge",user,project,iid), params, (data) ->fn data if fn

  ###

   method		: post
   operationId	: refuseUsingPOST
   description	: 拒绝某个 MergeRequest
   path			: user,project,iid
   query		: 
   body			: 

  ###

  refuseUsingPOST: (user,project,iid, params = {}, fn = null) =>
    @debug "Merge_requests::refuseUsingPOST()"
    @post util.format("user/%s/project/%s/git/merge/%s/refuse",user,project,iid), params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: listUsingGET_2
   description	: MergeRequest 列表
   path			: user,project,status
   query		: page(integer),pageSize(integer)
   body			: 

  ###

  listUsingGET_2: (user,project,status, params = {}, fn = null) =>
    @debug "Merge_requests::listUsingGET_2()"
    @get util.format("user/%s/project/%s/git/merges/%s",user,project,status), params, (data) ->fn data if fn

module.exports = (client) -> new Merge_requests client












