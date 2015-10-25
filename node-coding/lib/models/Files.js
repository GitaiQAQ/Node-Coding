(function() {
  var BaseModel, Files, util,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  BaseModel = require('../BaseModel');

  util = require('util');

  Files = (function(superClass) {
    extend(Files, superClass);

    function Files() {
      this.allFolderFileCountUsingGET = bind(this.allFolderFileCountUsingGET, this);
      this.listAllFolderUsingGET = bind(this.listAllFolderUsingGET, this);
      this.listFolderUsingGET = bind(this.listFolderUsingGET, this);
      this.listFileUsingGET = bind(this.listFileUsingGET, this);
      this.renameFolderUsingPUT = bind(this.renameFolderUsingPUT, this);
      this.moveUsingPUT = bind(this.moveUsingPUT, this);
      this.mkdirUsingPOST = bind(this.mkdirUsingPOST, this);
      this.listFileHistoryUsingGET = bind(this.listFileHistoryUsingGET, this);
      this.createFileUsingPOST = bind(this.createFileUsingPOST, this);
      this.updateFileHistoryRemarkUsingPOST = bind(this.updateFileHistoryRemarkUsingPOST, this);
      this.imagePreviewUsingGET = bind(this.imagePreviewUsingGET, this);
      this.viewFileUsingGET = bind(this.viewFileUsingGET, this);
      this.editFileUsingPOST = bind(this.editFileUsingPOST, this);
      this.downloadURLUsingGET = bind(this.downloadURLUsingGET, this);
      this.downloadFileUsingGET = bind(this.downloadFileUsingGET, this);
      this.uploadFileUsingPOST = bind(this.uploadFileUsingPOST, this);
      this.downloadHistoryUsingGET = bind(this.downloadHistoryUsingGET, this);
      this.deleteFileHistoryUsingDELETE = bind(this.deleteFileHistoryUsingDELETE, this);
      this.deleteFilesUsingDELETE = bind(this.deleteFilesUsingDELETE, this);
      this.uploadFileHistoryUsingPOST = bind(this.uploadFileHistoryUsingPOST, this);
      this.checkExistedUsingGET = bind(this.checkExistedUsingGET, this);
      return Files.__super__.constructor.apply(this, arguments);
    }


    /*
    
     method		: get
     operationId	: checkExistedUsingGET
     description	: 检查目录下是否有同名的文件
     path			: user,project,dir
     query		: 
     body			: names(array)
     */

    Files.prototype.checkExistedUsingGET = function(user, project, dir, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Files::checkExistedUsingGET()");
      return this.get(util.format("user/%s/project/%s/dir/%s/files/existed", user, project, dir), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: uploadFileHistoryUsingPOST
     description	: 上传文件新版本
     path			: user,project
     query		: 
     body			:
     */

    Files.prototype.uploadFileHistoryUsingPOST = function(user, project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Files::uploadFileHistoryUsingPOST()");
      return this.post(util.format("user/%s/project/%s/file/history/upload", user, project), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: delete
     operationId	: deleteFilesUsingDELETE
     description	: 删除文件
     path			: user,project
     query		: 
     body			: fileIds(array)
     */

    Files.prototype.deleteFilesUsingDELETE = function(user, project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Files::deleteFilesUsingDELETE()");
      return this["delete"](util.format("user/%s/project/%s/files", user, project), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: delete
     operationId	: deleteFileHistoryUsingDELETE
     description	: 删除文件历史
     path			: user,project,id
     query		: 
     body			:
     */

    Files.prototype.deleteFileHistoryUsingDELETE = function(user, project, id, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Files::deleteFileHistoryUsingDELETE()");
      return this["delete"](util.format("user/%s/project/%s/files/histories/%s", user, project, id), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: downloadHistoryUsingGET
     description	: 下载历史文件版本
     path			: user,project,id
     query		: 
     body			:
     */

    Files.prototype.downloadHistoryUsingGET = function(user, project, id, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Files::downloadHistoryUsingGET()");
      return this.get(util.format("user/%s/project/%s/files/histories/%s/download", user, project, id), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: uploadFileUsingPOST
     description	: 上传私有项目的图片
     path			: user,project
     query		: 
     body			:
     */

    Files.prototype.uploadFileUsingPOST = function(user, project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Files::uploadFileUsingPOST()");
      return this.post(util.format("user/%s/project/%s/files/upload", user, project), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: downloadFileUsingGET
     description	: 文件下载
     path			: user,project,fileId
     query		: 
     body			:
     */

    Files.prototype.downloadFileUsingGET = function(user, project, fileId, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Files::downloadFileUsingGET()");
      return this.get(util.format("user/%s/project/%s/files/%s/download", user, project, fileId), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: downloadURLUsingGET
     description	: 文件下载URL
     path			: user,project,fileId
     query		: 
     body			:
     */

    Files.prototype.downloadURLUsingGET = function(user, project, fileId, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Files::downloadURLUsingGET()");
      return this.get(util.format("user/%s/project/%s/files/%s/download/url", user, project, fileId), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: editFileUsingPOST
     description	: 编辑文件
     path			: user,project,fileId
     query		: name(string),content(string),fileId(integer)
     body			:
     */

    Files.prototype.editFileUsingPOST = function(user, project, fileId, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Files::editFileUsingPOST()");
      return this.post(util.format("user/%s/project/%s/files/%s/edit", user, project, fileId), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: viewFileUsingGET
     description	: 查看文件
     path			: user,project,fileId
     query		: type(integer),width(integer),height(integer),flag(integer)
     body			:
     */

    Files.prototype.viewFileUsingGET = function(user, project, fileId, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Files::viewFileUsingGET()");
      return this.get(util.format("user/%s/project/%s/files/%s/view", user, project, fileId), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: imagePreviewUsingGET
     description	: 图片预览
     path			: user,project,fileId
     query		: type(integer),width(integer),height(integer)
     body			:
     */

    Files.prototype.imagePreviewUsingGET = function(user, project, fileId, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Files::imagePreviewUsingGET()");
      return this.get(util.format("user/%s/project/%s/files/%s/view/image", user, project, fileId), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: updateFileHistoryRemarkUsingPOST
     description	: 修改历史版本备注
     path			: user,project,file_id,history_id
     query		: remark(string)
     body			:
     */

    Files.prototype.updateFileHistoryRemarkUsingPOST = function(user, project, file_id, history_id, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Files::updateFileHistoryRemarkUsingPOST()");
      return this.post(util.format("user/%s/project/%s/files/%s/histories/%s/remark", user, project, file_id, history_id), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: createFileUsingPOST
     description	: 创建文件
     path			: user,project,folderId
     query		: projectFile.deleted_at(string),projectFile.projects_id(integer),projectFile.files_id(integer),projectFile.comments(integer),projectFile.id(integer),folder.owner_id(integer),folder.parent_id(integer),folder.created_at(ref),folder.updated_at(ref),folder.type(integer),folder.size(integer),folder.name(string),folder.storage_type(string),folder.storage_key(string),folder.history_id(integer),folder.id(integer),name(string),content(string),folderId(integer)
     body			:
     */

    Files.prototype.createFileUsingPOST = function(user, project, folderId, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Files::createFileUsingPOST()");
      return this.post(util.format("user/%s/project/%s/files/%s/files", user, project, folderId), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: listFileHistoryUsingGET
     description	: 文件历史
     path			: user,project,id
     query		: type(integer),width(integer),height(integer)
     body			:
     */

    Files.prototype.listFileHistoryUsingGET = function(user, project, id, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Files::listFileHistoryUsingGET()");
      return this.get(util.format("user/%s/project/%s/files/%s/histories", user, project, id), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: mkdirUsingPOST
     description	: 创建文件夹
     path			: user,project
     query		: name(string),parentId(string)
     body			:
     */

    Files.prototype.mkdirUsingPOST = function(user, project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Files::mkdirUsingPOST()");
      return this.post(util.format("user/%s/project/%s/folder", user, project), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: put
     operationId	: moveUsingPUT
     description	: 移动文件
     path			: user,project,dirId
     query		: fileId(ref)
     body			:
     */

    Files.prototype.moveUsingPUT = function(user, project, dirId, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Files::moveUsingPUT()");
      return this.put(util.format("user/%s/project/%s/folder/%s/move", user, project, dirId), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: put
     operationId	: renameFolderUsingPUT
     description	: 重命名文件夹
     path			: user,project,dir
     query		: name(string)
     body			:
     */

    Files.prototype.renameFolderUsingPUT = function(user, project, dir, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Files::renameFolderUsingPUT()");
      return this.put(util.format("user/%s/project/%s/folder/%s", user, project, dir), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: listFileUsingGET
     description	: 列出某目录下的文件
     path			: user,project,dir
     query		: type(integer),width(integer),height(integer),page(integer),pageSize(integer)
     body			:
     */

    Files.prototype.listFileUsingGET = function(user, project, dir, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Files::listFileUsingGET()");
      return this.get(util.format("user/%s/project/%s/folder/%s/files", user, project, dir), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: listFolderUsingGET
     description	: 列出所有一级目录
     path			: user,project
     query		: page(integer),pageSize(integer)
     body			:
     */

    Files.prototype.listFolderUsingGET = function(user, project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Files::listFolderUsingGET()");
      return this.get(util.format("user/%s/project/%s/folders", user, project), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: listAllFolderUsingGET
     description	: 列出所有目录
     path			: user,project
     query		: page(integer),pageSize(integer)
     body			:
     */

    Files.prototype.listAllFolderUsingGET = function(user, project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Files::listAllFolderUsingGET()");
      return this.get(util.format("user/%s/project/%s/folders/all", user, project), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: allFolderFileCountUsingGET
     description	: 获取文件夹的文件数
     path			: user,project
     query		: 
     body			:
     */

    Files.prototype.allFolderFileCountUsingGET = function(user, project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Files::allFolderFileCountUsingGET()");
      return this.get(util.format("user/%s/project/%s/folders/file_count/all", user, project), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };

    return Files;

  })(BaseModel);

  module.exports = function(client) {
    return new Files(client);
  };

}).call(this);
