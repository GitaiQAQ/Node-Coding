BaseModel = require '../BaseModel'
util = require 'util'

class Branchs extends BaseModel

  ###

   method		: post
   operationId	: setDefaultBranch
   description	: 设置默认分支
   path			: user,project
   query		: default_branch(string)
   body			: 

  ###

  setDefaultBranch: (user,project, params = {}, fn = null) =>
    @debug "Branchs::setDefaultBranch()"
    @post util.format("user/%s/project/%s/git/branch/default",user,project), params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: list
   description	: 分页显示分支列表
   path			: user,project
   query		: page(integer),pageSize(integer)
   body			: 

  ###

  list: (user,project, params = {}, fn = null) =>
    @debug "Branchs::list()"
    @get util.format("user/%s/project/%s/git/branches",user,project), params, (data) ->
      fn data if fn

  ###

   method		: post
   operationId	: createBranch
   description	: 新建分支
   path			: user,project
   query		: branch_name(string),start_point(string)
   body			: 

  ###

  createBranch: (user,project, params = {}, fn = null) =>
    @debug "Branchs::createBranch()"
    @post util.format("user/%s/project/%s/git/branches/create",user,project), params, (data) ->
      fn data if fn

  ###

   method		: post
   operationId	: deleteBranch
   description	: 删除分支
   path			: user,project
   query		: branch_name(string)
   body			: 

  ###

  deleteBranch: (user,project, params = {}, fn = null) =>
    @debug "Branchs::deleteBranch()"
    @post util.format("user/%s/project/%s/git/branches/delete",user,project), params, (data) ->
      fn data if fn

  ###

   method		: post
   operationId	: addProtectedBranchMember
   description	: 添加保护分支成员
   path			: user,project
   query		: branch_name(string),target_global_key(string)
   body			: 

  ###

  addProtectedBranchMember: (user,project, params = {}, fn = null) =>
    @debug "Branchs::addProtectedBranchMember()"
    @post util.format("user/%s/project/%s/git/branches/protected_branch/add_member",user,project), params, (data) ->
      fn data if fn

  ###

   method		: post
   operationId	: disableProtectedBranch
   description	: 取消保护分支
   path			: user,project
   query		: branch_name(string)
   body			: 

  ###

  disableProtectedBranch: (user,project, params = {}, fn = null) =>
    @debug "Branchs::disableProtectedBranch()"
    @post util.format("user/%s/project/%s/git/branches/protected_branch/disable",user,project), params, (data) ->
      fn data if fn

  ###

   method		: post
   operationId	: enableProtectedBranch
   description	: 设置保护分支
   path			: user,project
   query		: branch_name(string)
   body			: 

  ###

  enableProtectedBranch: (user,project, params = {}, fn = null) =>
    @debug "Branchs::enableProtectedBranch()"
    @post util.format("user/%s/project/%s/git/branches/protected_branch/enable",user,project), params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: listProtectedBranchMember
   description	: 列出保护分支中的成员
   path			: user,project
   query		: branch_name(string)
   body			: 

  ###

  listProtectedBranchMember: (user,project, params = {}, fn = null) =>
    @debug "Branchs::listProtectedBranchMember()"
    @get util.format("user/%s/project/%s/git/branches/protected_branch/members",user,project), params, (data) ->
      fn data if fn

  ###

   method		: post
   operationId	: removeProtectedBranchMember
   description	: 删除保护分支成员
   path			: user,project
   query		: branch_name(string),target_global_key(string)
   body			: 

  ###

  removeProtectedBranchMember: (user,project, params = {}, fn = null) =>
    @debug "Branchs::removeProtectedBranchMember()"
    @post util.format("user/%s/project/%s/git/branches/protected_branch/remove_member",user,project), params, (data) ->
      fn data if fn

module.exports = (client) -> new Branchs client

