BaseModel = require '../BaseModel'
util = require 'util'

class Files extends BaseModel

  ###

   method		: get
   operationId	: checkExistedUsingGET
   description	: 检查目录下是否有同名的文件
   path			: user,project,dir
   query		: 
   body			: names(array)

  ###

  checkExistedUsingGET: (user,project,dir, params = {}, fn = null) =>
    @debug "Files::checkExistedUsingGET()"
    @get util.format("user/%s/project/%s/dir/%s/files/existed",user,project,dir), params, (data) ->fn data if fn

  ###

   method		: post
   operationId	: uploadFileHistoryUsingPOST
   description	: 上传文件新版本
   path			: user,project
   query		: 
   body			: 

  ###

  uploadFileHistoryUsingPOST: (user,project, params = {}, fn = null) =>
    @debug "Files::uploadFileHistoryUsingPOST()"
    @post util.format("user/%s/project/%s/file/history/upload",user,project), params, (data) ->fn data if fn

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
    @delete util.format("user/%s/project/%s/files",user,project), params, (data) ->fn data if fn

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
    @delete util.format("user/%s/project/%s/files/histories/%s",user,project,id), params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: downloadHistoryUsingGET
   description	: 下载历史文件版本
   path			: user,project,id
   query		: 
   body			: 

  ###

  downloadHistoryUsingGET: (user,project,id, params = {}, fn = null) =>
    @debug "Files::downloadHistoryUsingGET()"
    @get util.format("user/%s/project/%s/files/histories/%s/download",user,project,id), params, (data) ->fn data if fn

  ###

   method		: post
   operationId	: uploadFileUsingPOST
   description	: 上传私有项目的图片
   path			: user,project
   query		: 
   body			: 

  ###

  uploadFileUsingPOST: (user,project, params = {}, fn = null) =>
    @debug "Files::uploadFileUsingPOST()"
    @post util.format("user/%s/project/%s/files/upload",user,project), params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: downloadFileUsingGET
   description	: 文件下载
   path			: user,project,fileId
   query		: 
   body			: 

  ###

  downloadFileUsingGET: (user,project,fileId, params = {}, fn = null) =>
    @debug "Files::downloadFileUsingGET()"
    @get util.format("user/%s/project/%s/files/%s/download",user,project,fileId), params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: downloadURLUsingGET
   description	: 文件下载URL
   path			: user,project,fileId
   query		: 
   body			: 

  ###

  downloadURLUsingGET: (user,project,fileId, params = {}, fn = null) =>
    @debug "Files::downloadURLUsingGET()"
    @get util.format("user/%s/project/%s/files/%s/download/url",user,project,fileId), params, (data) ->fn data if fn

  ###

   method		: post
   operationId	: editFileUsingPOST
   description	: 编辑文件
   path			: user,project,fileId
   query		: name(string),content(string),fileId(integer)
   body			: 

  ###

  editFileUsingPOST: (user,project,fileId, params = {}, fn = null) =>
    @debug "Files::editFileUsingPOST()"
    @post util.format("user/%s/project/%s/files/%s/edit",user,project,fileId), params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: viewFileUsingGET
   description	: 查看文件
   path			: user,project,fileId
   query		: type(integer),width(integer),height(integer),flag(integer)
   body			: 

  ###

  viewFileUsingGET: (user,project,fileId, params = {}, fn = null) =>
    @debug "Files::viewFileUsingGET()"
    @get util.format("user/%s/project/%s/files/%s/view",user,project,fileId), params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: imagePreviewUsingGET
   description	: 图片预览
   path			: user,project,fileId
   query		: type(integer),width(integer),height(integer)
   body			: 

  ###

  imagePreviewUsingGET: (user,project,fileId, params = {}, fn = null) =>
    @debug "Files::imagePreviewUsingGET()"
    @get util.format("user/%s/project/%s/files/%s/view/image",user,project,fileId), params, (data) ->fn data if fn

  ###

   method		: post
   operationId	: updateFileHistoryRemarkUsingPOST
   description	: 修改历史版本备注
   path			: user,project,file_id,history_id
   query		: remark(string)
   body			: 

  ###

  updateFileHistoryRemarkUsingPOST: (user,project,file_id,history_id, params = {}, fn = null) =>
    @debug "Files::updateFileHistoryRemarkUsingPOST()"
    @post util.format("user/%s/project/%s/files/%s/histories/%s/remark",user,project,file_id,history_id), params, (data) ->fn data if fn

  ###

   method		: post
   operationId	: createFileUsingPOST
   description	: 创建文件
   path			: user,project,folderId
   query		: projectFile.deleted_at(string),projectFile.projects_id(integer),projectFile.files_id(integer),projectFile.comments(integer),projectFile.id(integer),folder.owner_id(integer),folder.parent_id(integer),folder.created_at(ref),folder.updated_at(ref),folder.type(integer),folder.size(integer),folder.name(string),folder.storage_type(string),folder.storage_key(string),folder.history_id(integer),folder.id(integer),name(string),content(string),folderId(integer)
   body			: 

  ###

  createFileUsingPOST: (user,project,folderId, params = {}, fn = null) =>
    @debug "Files::createFileUsingPOST()"
    @post util.format("user/%s/project/%s/files/%s/files",user,project,folderId), params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: listFileHistoryUsingGET
   description	: 文件历史
   path			: user,project,id
   query		: type(integer),width(integer),height(integer)
   body			: 

  ###

  listFileHistoryUsingGET: (user,project,id, params = {}, fn = null) =>
    @debug "Files::listFileHistoryUsingGET()"
    @get util.format("user/%s/project/%s/files/%s/histories",user,project,id), params, (data) ->fn data if fn

  ###

   method		: post
   operationId	: mkdirUsingPOST
   description	: 创建文件夹
   path			: user,project
   query		: name(string),parentId(string)
   body			: 

  ###

  mkdirUsingPOST: (user,project, params = {}, fn = null) =>
    @debug "Files::mkdirUsingPOST()"
    @post util.format("user/%s/project/%s/folder",user,project), params, (data) ->fn data if fn

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
    @put util.format("user/%s/project/%s/folder/%s/move",user,project,dirId), params, (data) ->fn data if fn

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
    @put util.format("user/%s/project/%s/folder/%s",user,project,dir), params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: listFileUsingGET
   description	: 列出某目录下的文件
   path			: user,project,dir
   query		: type(integer),width(integer),height(integer),page(integer),pageSize(integer)
   body			: 

  ###

  listFileUsingGET: (user,project,dir, params = {}, fn = null) =>
    @debug "Files::listFileUsingGET()"
    @get util.format("user/%s/project/%s/folder/%s/files",user,project,dir), params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: listFolderUsingGET
   description	: 列出所有一级目录
   path			: user,project
   query		: page(integer),pageSize(integer)
   body			: 

  ###

  listFolderUsingGET: (user,project, params = {}, fn = null) =>
    @debug "Files::listFolderUsingGET()"
    @get util.format("user/%s/project/%s/folders",user,project), params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: listAllFolderUsingGET
   description	: 列出所有目录
   path			: user,project
   query		: page(integer),pageSize(integer)
   body			: 

  ###

  listAllFolderUsingGET: (user,project, params = {}, fn = null) =>
    @debug "Files::listAllFolderUsingGET()"
    @get util.format("user/%s/project/%s/folders/all",user,project), params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: allFolderFileCountUsingGET
   description	: 获取文件夹的文件数
   path			: user,project
   query		: 
   body			: 

  ###

  allFolderFileCountUsingGET: (user,project, params = {}, fn = null) =>
    @debug "Files::allFolderFileCountUsingGET()"
    @get util.format("user/%s/project/%s/folders/file_count/all",user,project), params, (data) ->fn data if fn

module.exports = (client) -> new Files client












