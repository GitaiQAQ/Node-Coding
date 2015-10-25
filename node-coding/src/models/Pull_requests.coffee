BaseModel = require '../BaseModel'
util = require 'util'

class Pull_requests extends BaseModel

  ###

   method		: get
   operationId	: createUsingGET
   description	: 创建 PullRequest
   path			: user,project
   query		: src_branch(string),des_user_name(string),des_project_name(string),des_branch(string),diff(string)
   body			: 

  ###

  createUsingGET: (user,project, params = {}, fn = null) =>
    @debug "Pull_requests::createUsingGET()"
    @get util.format("user/%s/project/%s/git/pull/create",user,project), params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: showUsingGET_3
   description	: 获取某个 PullRequest
   path			: user,project,iid
   query		: diff(string)
   body			: 

  ###

  showUsingGET_3: (user,project,iid, params = {}, fn = null) =>
    @debug "Pull_requests::showUsingGET_3()"
    @get util.format("user/%s/project/%s/git/pull/%s",user,project,iid), params, (data) ->fn data if fn

  ###

   method		: post
   operationId	: cancelUsingPOST_1
   description	: 取消 PullRequest
   path			: user,project,iid
   query		: 
   body			: 

  ###

  cancelUsingPOST_1: (user,project,iid, params = {}, fn = null) =>
    @debug "Pull_requests::cancelUsingPOST_1()"
    @post util.format("user/%s/project/%s/git/pull/%s/cancel",user,project,iid), params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: commentsUsingGET
   description	: PullRequest 评论列表
   path			: user,project,iid
   query		: 
   body			: 

  ###

  commentsUsingGET: (user,project,iid, params = {}, fn = null) =>
    @debug "Pull_requests::commentsUsingGET()"
    @get util.format("user/%s/project/%s/git/pull/%s/comments",user,project,iid), params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: showCommitsUsingGET
   description	: 获取某个 PullRequest 的评论
   path			: user,project,iid
   query		: 
   body			: 

  ###

  showCommitsUsingGET: (user,project,iid, params = {}, fn = null) =>
    @debug "Pull_requests::showCommitsUsingGET()"
    @get util.format("user/%s/project/%s/git/pull/%s/commits",user,project,iid), params, (data) ->fn data if fn

  ###

   method		: post
   operationId	: mergeUsingPOST_1
   description	: 合并 PullRequest
   path			: user,project,iid
   query		: message(string)
   body			: 

  ###

  mergeUsingPOST_1: (user,project,iid, params = {}, fn = null) =>
    @debug "Pull_requests::mergeUsingPOST_1()"
    @post util.format("user/%s/project/%s/git/pull/%s/merge",user,project,iid), params, (data) ->fn data if fn

  ###

   method		: post
   operationId	: refuseUsingPOST_1
   description	: 拒绝 PullRequest
   path			: user,project,iid
   query		: 
   body			: 

  ###

  refuseUsingPOST_1: (user,project,iid, params = {}, fn = null) =>
    @debug "Pull_requests::refuseUsingPOST_1()"
    @post util.format("user/%s/project/%s/git/pull/%s/refuse",user,project,iid), params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: listUsingGET_3
   description	: PullRequest 列表
   path			: user,project,status
   query		: page(integer),pageSize(integer)
   body			: 

  ###

  listUsingGET_3: (user,project,status, params = {}, fn = null) =>
    @debug "Pull_requests::listUsingGET_3()"
    @get util.format("user/%s/project/%s/git/pulls/%s",user,project,status), params, (data) ->fn data if fn

module.exports = (client) -> new Pull_requests client












