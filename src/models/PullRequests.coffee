# Generated by gitai 0.1.2

BaseModel = require '../BaseModel'
util = require 'util'

class PullRequests extends BaseModel

###

 method			: get
 summary 		: create
 description	: 创建 PullRequest



###

create: (user,project,params = {}, fn = null) =>
  @debug "PullRequests::create()"
  @get "user/#{user}/project/#{project}/git/pull/create", params, (data) ->
    fn data if fn

###

 method			: get
 summary 		: get
 description	: 获取某个 PullRequest



###

get: (user,project,iid,params = {}, fn = null) =>
  @debug "PullRequests::get()"
  @get "user/#{user}/project/#{project}/git/pull/#{iid}", params, (data) ->
    fn data if fn

###

 method			: post
 summary 		: cancle
 description	: 取消 PullRequest


###

cancle: (user,project,iid,fn = null) =>
  @debug "PullRequests::cancle()"
  @post "user/#{user}/project/#{project}/git/pull/#{iid}/cancel", (data) ->
    fn data if fn

###

 method			: get
 summary 		: comments
 description	: PullRequest 评论列表


###

comments: (user,project,iid,fn = null) =>
  @debug "PullRequests::comments()"
  @get "user/#{user}/project/#{project}/git/pull/#{iid}/comments", (data) ->
    fn data if fn

###

 method			: get
 summary 		: commits
 description	: 获取某个 PullRequest 的评论


###

commits: (user,project,iid,fn = null) =>
  @debug "PullRequests::commits()"
  @get "user/#{user}/project/#{project}/git/pull/#{iid}/commits", (data) ->
    fn data if fn

###

 method			: post
 summary 		: merge
 description	: 合并 PullRequest



###

merge: (user,project,iid,params = {}, fn = null) =>
  @debug "PullRequests::merge()"
  @post "user/#{user}/project/#{project}/git/pull/#{iid}/merge", params, (data) ->
    fn data if fn

###

 method			: post
 summary 		: refuse
 description	: 拒绝 PullRequest


###

refuse: (user,project,iid,fn = null) =>
  @debug "PullRequests::refuse()"
  @post "user/#{user}/project/#{project}/git/pull/#{iid}/refuse", (data) ->
    fn data if fn

###

 method			: get
 summary 		: list
 description	: PullRequest 列表



###

list: (user,project,status,params = {}, fn = null) =>
  @debug "PullRequests::list()"
  @get "user/#{user}/project/#{project}/git/pulls/#{status}", params, (data) ->
    fn data if fn



module.exports = (client) -> new PullRequests client