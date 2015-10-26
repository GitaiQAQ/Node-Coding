BaseModel = require '../BaseModel'
util = require 'util'

class Project_topics extends BaseModel

  ###

   method		: get
   operationId	: projectTopicList
   description	: 项目讨论列表
   path			: user,project
   query		: orderBy(integer),page(integer),pageSize(integer)
   body			: 

  ###

  projectTopicList: (user,project, params = {}, fn = null) =>
    @debug "Project_topics::projectTopicList()"
    @get util.format("user/%s/project/%s/topics",user,project), params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: topicCount
   description	: 所有讨论的个数和我的讨论的个数
   path			: user,project
   query		: 
   body			: 

  ###

  topicCount: (user,project, params = {}, fn = null) =>
    @debug "Project_topics::topicCount()"
    @get util.format("user/%s/project/%s/topics/count",user,project), params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: getProjectTopicByLabel
   description	: 通过标签获得讨论列表
   path			: user,project,id
   query		: orderBy(integer),page(integer),pageSize(integer)
   body			: 

  ###

  getProjectTopicByLabel: (user,project,id, params = {}, fn = null) =>
    @debug "Project_topics::getProjectTopicByLabel()"
    @get util.format("user/%s/project/%s/topics/label/%s",user,project,id), params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: getMyLabelByProject
   description	: 所有讨论的个数和我的讨论的个数
   path			: user,project
   query		: 
   body			: 

  ###

  getMyLabelByProject: (user,project, params = {}, fn = null) =>
    @debug "Project_topics::getMyLabelByProject()"
    @get util.format("user/%s/project/%s/topics/labels/my",user,project), params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: myProjectTopicList
   description	: 我的讨论
   path			: user,project
   query		: orderBy(integer),page(integer),pageSize(integer)
   body			: 

  ###

  myProjectTopicList: (user,project, params = {}, fn = null) =>
    @debug "Project_topics::myProjectTopicList()"
    @get util.format("user/%s/project/%s/topics/mine",user,project), params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: myWatchingProjectTopics
   description	: 获取我关注的讨论列表
   path			: user,project
   query		: orderBy(integer),page(integer),pageSize(integer)
   body			: 

  ###

  myWatchingProjectTopics: (user,project, params = {}, fn = null) =>
    @debug "Project_topics::myWatchingProjectTopics()"
    @get util.format("user/%s/project/%s/topics/watching",user,project), params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: projectTopicDetail
   description	: 讨论详情
   path			: user,project,id
   query		: type(integer),toc(boolean)
   body			: 

  ###

  projectTopicDetail: (user,project,id, params = {}, fn = null) =>
    @debug "Project_topics::projectTopicDetail()"
    @get util.format("user/%s/project/%s/topics/%s",user,project,id), params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: projectTopicComments
   description	: 讨论评论列表
   path			: user,project,id
   query		: page(integer),pageSize(integer),type(integer)
   body			: 

  ###

  projectTopicComments: (user,project,id, params = {}, fn = null) =>
    @debug "Project_topics::projectTopicComments()"
    @get util.format("user/%s/project/%s/topics/%s/comments",user,project,id), params, (data) ->
      fn data if fn

  ###

   method		: post
   operationId	: addTopicLabel
   description	: 讨论添加标签
   path			: user,project,id,labelId
   query		: 
   body			: 

  ###

  addTopicLabel: (user,project,id,labelId, params = {}, fn = null) =>
    @debug "Project_topics::addTopicLabel()"
    @post util.format("user/%s/project/%s/topics/%s/label/%s",user,project,id,labelId), params, (data) ->
      fn data if fn

  ###

   method		: post
   operationId	: operateTopicLabels
   description	: 批量操作讨论标签
   path			: user,project,id
   query		: label_id(string)
   body			: 

  ###

  operateTopicLabels: (user,project,id, params = {}, fn = null) =>
    @debug "Project_topics::operateTopicLabels()"
    @post util.format("user/%s/project/%s/topics/%s/labels",user,project,id), params, (data) ->
      fn data if fn

  ###

   method		: post
   operationId	: watch_1
   description	: 关注讨论
   path			: user,project,id
   query		: 
   body			: 

  ###

  watch_1: (user,project,id, params = {}, fn = null) =>
    @debug "Project_topics::watch_1()"
    @post util.format("user/%s/project/%s/topics/%s/watch",user,project,id), params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: getTopicWatchers
   description	: 获取关注该讨论的用户
   path			: user,project,id
   query		: page(integer),pageSize(integer)
   body			: 

  ###

  getTopicWatchers: (user,project,id, params = {}, fn = null) =>
    @debug "Project_topics::getTopicWatchers()"
    @get util.format("user/%s/project/%s/topics/%s/watchers",user,project,id), params, (data) ->
      fn data if fn

module.exports = (client) -> new Project_topics client

