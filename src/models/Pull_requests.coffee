BaseModel = require '../BaseModel'
util = require 'util'

class Pull_requests extends BaseModel

  ###

   method		: get
   operationId	: create
   description	: 创建 PullRequest
   path			: user,project
   query		: src_branch(string),des_user_name(string),des_project_name(string),des_branch(string),diff(string)
   body			: 

  ###

  create: (user,project, params = {}, fn = null) =>
    @debug "Pull_requests::create()"
    @get util.format("user/%s/project/%s/git/pull/create",user,project), params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: show_3
   description	: 获取某个 PullRequest
   path			: user,project,iid
   query		: diff(string)
   body			: 

  ###

  show_3: (user,project,iid, params = {}, fn = null) =>
    @debug "Pull_requests::show_3()"
    @get util.format("user/%s/project/%s/git/pull/%s",user,project,iid), params, (data) ->
      fn data if fn

  ###

   method		: post
   operationId	: cancel_1
   description	: 取消 PullRequest
   path			: user,project,iid
   query		: 
   body			: 

  ###

  cancel_1: (user,project,iid, params = {}, fn = null) =>
    @debug "Pull_requests::cancel_1()"
    @post util.format("user/%s/project/%s/git/pull/%s/cancel",user,project,iid), params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: comments
   description	: PullRequest 评论列表
   path			: user,project,iid
   query		: 
   body			: 

  ###

  comments: (user,project,iid, params = {}, fn = null) =>
    @debug "Pull_requests::comments()"
    @get util.format("user/%s/project/%s/git/pull/%s/comments",user,project,iid), params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: showCommits
   description	: 获取某个 PullRequest 的评论
   path			: user,project,iid
   query		: 
   body			: 

  ###

  showCommits: (user,project,iid, params = {}, fn = null) =>
    @debug "Pull_requests::showCommits()"
    @get util.format("user/%s/project/%s/git/pull/%s/commits",user,project,iid), params, (data) ->
      fn data if fn

  ###

   method		: post
   operationId	: merge_1
   description	: 合并 PullRequest
   path			: user,project,iid
   query		: message(string)
   body			: 

  ###

  merge_1: (user,project,iid, params = {}, fn = null) =>
    @debug "Pull_requests::merge_1()"
    @post util.format("user/%s/project/%s/git/pull/%s/merge",user,project,iid), params, (data) ->
      fn data if fn

  ###

   method		: post
   operationId	: refuse_1
   description	: 拒绝 PullRequest
   path			: user,project,iid
   query		: 
   body			: 

  ###

  refuse_1: (user,project,iid, params = {}, fn = null) =>
    @debug "Pull_requests::refuse_1()"
    @post util.format("user/%s/project/%s/git/pull/%s/refuse",user,project,iid), params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: list_3
   description	: PullRequest 列表
   path			: user,project,status
   query		: page(integer),pageSize(integer)
   body			: 

  ###

  list_3: (user,project,status, params = {}, fn = null) =>
    @debug "Pull_requests::list_3()"
    @get util.format("user/%s/project/%s/git/pulls/%s",user,project,status), params, (data) ->
      fn data if fn

module.exports = (client) -> new Pull_requests client

