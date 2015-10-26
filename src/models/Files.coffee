BaseModel = require '../BaseModel'
util = require 'util'

class Files extends BaseModel

  ###

   method		: get
   operationId	: checkExisted
   description	: 检查目录下是否有同名的文件
   path			: user,project,dir
   query		: 
   body			: names(array)

  ###

  checkExisted: (user,project,dir, params = {}, fn = null) =>
    @debug "Files::checkExisted()"
    @get util.format("user/%s/project/%s/dir/%s/files/existed",user,project,dir), params, (data) ->
      fn data if fn

  ###

   method		: post
   operationId	: uploadFileHistory
   description	: 上传文件新版本
   path			: user,project
   query		: 
   body			: 

  ###

  uploadFileHistory: (user,project, params = {}, fn = null) =>
    @debug "Files::uploadFileHistory()"
    @post util.format("user/%s/project/%s/file/history/upload",user,project), params, (data) ->
      fn data if fn

  ###

   method		: delete
   operationId	: deleteFilesUsingDELETE
   description	: 删除文件
   path			: user,project
   query		: 
   body			: fileIds(array)

  ###

  deleteFilesUsingDELETE: (user,project, params = {}, fn = null) =>
    @debug "Files::deleteFilesUsingDELETE()"
    @delete util.format("user/%s/project/%s/files",user,project), params, (data) ->
      fn data if fn

  ###

   method		: delete
   operationId	: deleteFileHistoryUsingDELETE
   description	: 删除文件历史
   path			: user,project,id
   query		: 
   body			: 

  ###

  deleteFileHistoryUsingDELETE: (user,project,id, params = {}, fn = null) =>
    @debug "Files::deleteFileHistoryUsingDELETE()"
    @delete util.format("user/%s/project/%s/files/histories/%s",user,project,id), params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: downloadHistory
   description	: 下载历史文件版本
   path			: user,project,id
   query		: 
   body			: 

  ###

  downloadHistory: (user,project,id, params = {}, fn = null) =>
    @debug "Files::downloadHistory()"
    @get util.format("user/%s/project/%s/files/histories/%s/download",user,project,id), params, (data) ->
      fn data if fn

  ###

   method		: post
   operationId	: uploadFile
   description	: 上传私有项目的图片
   path			: user,project
   query		: 
   body			: 

  ###

  uploadFile: (user,project, params = {}, fn = null) =>
    @debug "Files::uploadFile()"
    @post util.format("user/%s/project/%s/files/upload",user,project), params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: downloadFile
   description	: 文件下载
   path			: user,project,fileId
   query		: 
   body			: 

  ###

  downloadFile: (user,project,fileId, params = {}, fn = null) =>
    @debug "Files::downloadFile()"
    @get util.format("user/%s/project/%s/files/%s/download",user,project,fileId), params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: downloadURL
   description	: 文件下载URL
   path			: user,project,fileId
   query		: 
   body			: 

  ###

  downloadURL: (user,project,fileId, params = {}, fn = null) =>
    @debug "Files::downloadURL()"
    @get util.format("user/%s/project/%s/files/%s/download/url",user,project,fileId), params, (data) ->
      fn data if fn

  ###

   method		: post
   operationId	: editFile
   description	: 编辑文件
   path			: user,project,fileId
   query		: name(string),content(string),fileId(integer)
   body			: 

  ###

  editFile: (user,project,fileId, params = {}, fn = null) =>
    @debug "Files::editFile()"
    @post util.format("user/%s/project/%s/files/%s/edit",user,project,fileId), params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: viewFile
   description	: 查看文件
   path			: user,project,fileId
   query		: type(integer),width(integer),height(integer),flag(integer)
   body			: 

  ###

  viewFile: (user,project,fileId, params = {}, fn = null) =>
    @debug "Files::viewFile()"
    @get util.format("user/%s/project/%s/files/%s/view",user,project,fileId), params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: imagePreview
   description	: 图片预览
   path			: user,project,fileId
   query		: type(integer),width(integer),height(integer)
   body			: 

  ###

  imagePreview: (user,project,fileId, params = {}, fn = null) =>
    @debug "Files::imagePreview()"
    @get util.format("user/%s/project/%s/files/%s/view/image",user,project,fileId), params, (data) ->
      fn data if fn

  ###

   method		: post
   operationId	: updateFileHistoryRemark
   description	: 修改历史版本备注
   path			: user,project,file_id,history_id
   query		: remark(string)
   body			: 

  ###

  updateFileHistoryRemark: (user,project,file_id,history_id, params = {}, fn = null) =>
    @debug "Files::updateFileHistoryRemark()"
    @post util.format("user/%s/project/%s/files/%s/histories/%s/remark",user,project,file_id,history_id), params, (data) ->
      fn data if fn

  ###

   method		: post
   operationId	: createFile
   description	: 创建文件
   path			: user,project,folderId
   query		: projectFile.deleted_at(string),projectFile.projects_id(integer),projectFile.files_id(integer),projectFile.comments(integer),projectFile.id(integer),folder.owner_id(integer),folder.parent_id(integer),folder.created_at(ref),folder.updated_at(ref),folder.type(integer),folder.size(integer),folder.name(string),folder.storage_type(string),folder.storage_key(string),folder.history_id(integer),folder.id(integer),name(string),content(string),folderId(integer)
   body			: 

  ###

  createFile: (user,project,folderId, params = {}, fn = null) =>
    @debug "Files::createFile()"
    @post util.format("user/%s/project/%s/files/%s/files",user,project,folderId), params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: listFileHistory
   description	: 文件历史
   path			: user,project,id
   query		: type(integer),width(integer),height(integer)
   body			: 

  ###

  listFileHistory: (user,project,id, params = {}, fn = null) =>
    @debug "Files::listFileHistory()"
    @get util.format("user/%s/project/%s/files/%s/histories",user,project,id), params, (data) ->
      fn data if fn

  ###

   method		: post
   operationId	: mkdir
   description	: 创建文件夹
   path			: user,project
   query		: name(string),parentId(string)
   body			: 

  ###

  mkdir: (user,project, params = {}, fn = null) =>
    @debug "Files::mkdir()"
    @post util.format("user/%s/project/%s/folder",user,project), params, (data) ->
      fn data if fn

  ###

   method		: put
   operationId	: moveUsingPUT
   description	: 移动文件
   path			: user,project,dirId
   query		: fileId(ref)
   body			: 

  ###

  moveUsingPUT: (user,project,dirId, params = {}, fn = null) =>
    @debug "Files::moveUsingPUT()"
    @put util.format("user/%s/project/%s/folder/%s/move",user,project,dirId), params, (data) ->
      fn data if fn

  ###

   method		: put
   operationId	: renameFolderUsingPUT
   description	: 重命名文件夹
   path			: user,project,dir
   query		: name(string)
   body			: 

  ###

  renameFolderUsingPUT: (user,project,dir, params = {}, fn = null) =>
    @debug "Files::renameFolderUsingPUT()"
    @put util.format("user/%s/project/%s/folder/%s",user,project,dir), params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: listFile
   description	: 列出某目录下的文件
   path			: user,project,dir
   query		: type(integer),width(integer),height(integer),page(integer),pageSize(integer)
   body			: 

  ###

  listFile: (user,project,dir, params = {}, fn = null) =>
    @debug "Files::listFile()"
    @get util.format("user/%s/project/%s/folder/%s/files",user,project,dir), params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: listFolder
   description	: 列出所有一级目录
   path			: user,project
   query		: page(integer),pageSize(integer)
   body			: 

  ###

  listFolder: (user,project, params = {}, fn = null) =>
    @debug "Files::listFolder()"
    @get util.format("user/%s/project/%s/folders",user,project), params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: listAllFolder
   description	: 列出所有目录
   path			: user,project
   query		: page(integer),pageSize(integer)
   body			: 

  ###

  listAllFolder: (user,project, params = {}, fn = null) =>
    @debug "Files::listAllFolder()"
    @get util.format("user/%s/project/%s/folders/all",user,project), params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: allFolderFileCount
   description	: 获取文件夹的文件数
   path			: user,project
   query		: 
   body			: 

  ###

  allFolderFileCount: (user,project, params = {}, fn = null) =>
    @debug "Files::allFolderFileCount()"
    @get util.format("user/%s/project/%s/folders/file_count/all",user,project), params, (data) ->
      fn data if fn

module.exports = (client) -> new Files client

