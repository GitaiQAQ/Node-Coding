BaseModel = require '../BaseModel'
util = require 'util'

class Project_topics extends BaseModel

  ###

   method		: get
   operationId	: projectTopicListUsingGET
   description	: 项目讨论列表
   path			: user,project
   query		: orderBy(integer),page(integer),pageSize(integer)
   body			: 

  ###

  projectTopicListUsingGET: (user,project, params = {}, fn = null) =>
    @debug "Project_topics::projectTopicListUsingGET()"
    @get util.format("user/%s/project/%s/topics",user,project), params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: topicCountUsingGET
   description	: 所有讨论的个数和我的讨论的个数
   path			: user,project
   query		: 
   body			: 

  ###

  topicCountUsingGET: (user,project, params = {}, fn = null) =>
    @debug "Project_topics::topicCountUsingGET()"
    @get util.format("user/%s/project/%s/topics/count",user,project), params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: getProjectTopicByLabelUsingGET
   description	: 通过标签获得讨论列表
   path			: user,project,id
   query		: orderBy(integer),page(integer),pageSize(integer)
   body			: 

  ###

  getProjectTopicByLabelUsingGET: (user,project,id, params = {}, fn = null) =>
    @debug "Project_topics::getProjectTopicByLabelUsingGET()"
    @get util.format("user/%s/project/%s/topics/label/%s",user,project,id), params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: getMyLabelByProjectUsingGET
   description	: 所有讨论的个数和我的讨论的个数
   path			: user,project
   query		: 
   body			: 

  ###

  getMyLabelByProjectUsingGET: (user,project, params = {}, fn = null) =>
    @debug "Project_topics::getMyLabelByProjectUsingGET()"
    @get util.format("user/%s/project/%s/topics/labels/my",user,project), params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: myProjectTopicListUsingGET
   description	: 我的讨论
   path			: user,project
   query		: orderBy(integer),page(integer),pageSize(integer)
   body			: 

  ###

  myProjectTopicListUsingGET: (user,project, params = {}, fn = null) =>
    @debug "Project_topics::myProjectTopicListUsingGET()"
    @get util.format("user/%s/project/%s/topics/mine",user,project), params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: myWatchingProjectTopicsUsingGET
   description	: 获取我关注的讨论列表
   path			: user,project
   query		: orderBy(integer),page(integer),pageSize(integer)
   body			: 

  ###

  myWatchingProjectTopicsUsingGET: (user,project, params = {}, fn = null) =>
    @debug "Project_topics::myWatchingProjectTopicsUsingGET()"
    @get util.format("user/%s/project/%s/topics/watching",user,project), params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: projectTopicDetailUsingGET
   description	: 讨论详情
   path			: user,project,id
   query		: type(integer),toc(boolean)
   body			: 

  ###

  projectTopicDetailUsingGET: (user,project,id, params = {}, fn = null) =>
    @debug "Project_topics::projectTopicDetailUsingGET()"
    @get util.format("user/%s/project/%s/topics/%s",user,project,id), params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: projectTopicCommentsUsingGET
   description	: 讨论评论列表
   path			: user,project,id
   query		: page(integer),pageSize(integer),type(integer)
   body			: 

  ###

  projectTopicCommentsUsingGET: (user,project,id, params = {}, fn = null) =>
    @debug "Project_topics::projectTopicCommentsUsingGET()"
    @get util.format("user/%s/project/%s/topics/%s/comments",user,project,id), params, (data) ->fn data if fn

  ###

   method		: post
   operationId	: addTopicLabelUsingPOST
   description	: 讨论添加标签
   path			: user,project,id,labelId
   query		: 
   body			: 

  ###

  addTopicLabelUsingPOST: (user,project,id,labelId, params = {}, fn = null) =>
    @debug "Project_topics::addTopicLabelUsingPOST()"
    @post util.format("user/%s/project/%s/topics/%s/label/%s",user,project,id,labelId), params, (data) ->fn data if fn

  ###

   method		: post
   operationId	: operateTopicLabelsUsingPOST
   description	: 批量操作讨论标签
   path			: user,project,id
   query		: label_id(string)
   body			: 

  ###

  operateTopicLabelsUsingPOST: (user,project,id, params = {}, fn = null) =>
    @debug "Project_topics::operateTopicLabelsUsingPOST()"
    @post util.format("user/%s/project/%s/topics/%s/labels",user,project,id), params, (data) ->fn data if fn

  ###

   method		: post
   operationId	: watchUsingPOST_1
   description	: 关注讨论
   path			: user,project,id
   query		: 
   body			: 

  ###

  watchUsingPOST_1: (user,project,id, params = {}, fn = null) =>
    @debug "Project_topics::watchUsingPOST_1()"
    @post util.format("user/%s/project/%s/topics/%s/watch",user,project,id), params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: getTopicWatchersUsingGET
   description	: 获取关注该讨论的用户
   path			: user,project,id
   query		: page(integer),pageSize(integer)
   body			: 

  ###

  getTopicWatchersUsingGET: (user,project,id, params = {}, fn = null) =>
    @debug "Project_topics::getTopicWatchersUsingGET()"
    @get util.format("user/%s/project/%s/topics/%s/watchers",user,project,id), params, (data) ->fn data if fn

module.exports = (client) -> new Project_topics client












