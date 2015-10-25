BaseModel = require '../BaseModel'
util = require 'util'

class Branchs extends BaseModel

  ###

   method		: post
   operationId	: setDefaultBranchUsingPOST
   description	: 设置默认分支
   path			: user,project
   query		: default_branch(string)
   body			: 

  ###

  setDefaultBranchUsingPOST: (user,project, params = {}, fn = null) =>
    @debug "Branchs::setDefaultBranchUsingPOST()"
    @post util.format("user/%s/project/%s/git/branch/default",user,project), params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: listUsingGET
   description	: 分页显示分支列表
   path			: user,project
   query		: page(integer),pageSize(integer)
   body			: 

  ###

  listUsingGET: (user,project, params = {}, fn = null) =>
    @debug "Branchs::listUsingGET()"
    @get util.format("user/%s/project/%s/git/branches",user,project), params, (data) ->fn data if fn

  ###

   method		: post
   operationId	: createBranchUsingPOST
   description	: 新建分支
   path			: user,project
   query		: branch_name(string),start_point(string)
   body			: 

  ###

  createBranchUsingPOST: (user,project, params = {}, fn = null) =>
    @debug "Branchs::createBranchUsingPOST()"
    @post util.format("user/%s/project/%s/git/branches/create",user,project), params, (data) ->fn data if fn

  ###

   method		: post
   operationId	: deleteBranchUsingPOST
   description	: 删除分支
   path			: user,project
   query		: branch_name(string)
   body			: 

  ###

  deleteBranchUsingPOST: (user,project, params = {}, fn = null) =>
    @debug "Branchs::deleteBranchUsingPOST()"
    @post util.format("user/%s/project/%s/git/branches/delete",user,project), params, (data) ->fn data if fn

  ###

   method		: post
   operationId	: addProtectedBranchMemberUsingPOST
   description	: 添加保护分支成员
   path			: user,project
   query		: branch_name(string),target_global_key(string)
   body			: 

  ###

  addProtectedBranchMemberUsingPOST: (user,project, params = {}, fn = null) =>
    @debug "Branchs::addProtectedBranchMemberUsingPOST()"
    @post util.format("user/%s/project/%s/git/branches/protected_branch/add_member",user,project), params, (data) ->fn data if fn

  ###

   method		: post
   operationId	: disableProtectedBranchUsingPOST
   description	: 取消保护分支
   path			: user,project
   query		: branch_name(string)
   body			: 

  ###

  disableProtectedBranchUsingPOST: (user,project, params = {}, fn = null) =>
    @debug "Branchs::disableProtectedBranchUsingPOST()"
    @post util.format("user/%s/project/%s/git/branches/protected_branch/disable",user,project), params, (data) ->fn data if fn

  ###

   method		: post
   operationId	: enableProtectedBranchUsingPOST
   description	: 设置保护分支
   path			: user,project
   query		: branch_name(string)
   body			: 

  ###

  enableProtectedBranchUsingPOST: (user,project, params = {}, fn = null) =>
    @debug "Branchs::enableProtectedBranchUsingPOST()"
    @post util.format("user/%s/project/%s/git/branches/protected_branch/enable",user,project), params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: listProtectedBranchMemberUsingGET
   description	: 列出保护分支中的成员
   path			: user,project
   query		: branch_name(string)
   body			: 

  ###

  listProtectedBranchMemberUsingGET: (user,project, params = {}, fn = null) =>
    @debug "Branchs::listProtectedBranchMemberUsingGET()"
    @get util.format("user/%s/project/%s/git/branches/protected_branch/members",user,project), params, (data) ->fn data if fn

  ###

   method		: post
   operationId	: removeProtectedBranchMemberUsingPOST
   description	: 删除保护分支成员
   path			: user,project
   query		: branch_name(string),target_global_key(string)
   body			: 

  ###

  removeProtectedBranchMemberUsingPOST: (user,project, params = {}, fn = null) =>
    @debug "Branchs::removeProtectedBranchMemberUsingPOST()"
    @post util.format("user/%s/project/%s/git/branches/protected_branch/remove_member",user,project), params, (data) ->fn data if fn

module.exports = (client) -> new Branchs client












