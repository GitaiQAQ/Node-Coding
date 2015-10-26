(function() {
  var assert, should;

  assert = require('assert');

  should = require('should');

  describe('Files', function() {
    var coding, projectName, realId, realSecret, testName, userName;
    coding = null;
    realId = "1ef6d9c909016bc8c3cdaa344d114262";
    realSecret = "4ba7a08053578fc0fd19eb86f0ff7fbf4e5d0512";
    projectName = "Node-Coding";
    userName = "gitai";
    testName = "dphdjy";
    before(function() {
      return coding = new require('..')({
        url: "https://coding.net",
        cache: "./temp"
      });
    });
    beforeEach(function() {});
    describe('checkExisted()', function() {
      return it('检查目录下是否有同名的文件', function(done) {
        return coding.files.checkExisted(user, project, dir, {
          "names": "array"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('uploadFileHistory()', function() {
      return it('上传文件新版本', function(done) {
        return coding.files.uploadFileHistory(user, project, {}, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('deleteFilesUsingDELETE()', function() {
      return it('删除文件', function(done) {
        return coding.files.deleteFilesUsingDELETE(user, project, {
          "fileIds": "array"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('deleteFileHistoryUsingDELETE()', function() {
      return it('删除文件历史', function(done) {
        return coding.files.deleteFileHistoryUsingDELETE(user, project, id, {}, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('downloadHistory()', function() {
      return it('下载历史文件版本', function(done) {
        return coding.files.downloadHistory(user, project, id, {}, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('uploadFile()', function() {
      return it('上传私有项目的图片', function(done) {
        return coding.files.uploadFile(user, project, {}, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('downloadFile()', function() {
      return it('文件下载', function(done) {
        return coding.files.downloadFile(user, project, fileId, {}, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('downloadURL()', function() {
      return it('文件下载URL', function(done) {
        return coding.files.downloadURL(user, project, fileId, {}, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('editFile()', function() {
      return it('编辑文件', function(done) {
        return coding.files.editFile(user, project, fileId, {
          "name": "string",
          "content": "string",
          "fileId": "integer"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('viewFile()', function() {
      return it('查看文件', function(done) {
        return coding.files.viewFile(user, project, fileId, {
          "type": "integer",
          "width": "integer",
          "height": "integer",
          "flag": "integer"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('imagePreview()', function() {
      return it('图片预览', function(done) {
        return coding.files.imagePreview(user, project, fileId, {
          "type": "integer",
          "width": "integer",
          "height": "integer"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('updateFileHistoryRemark()', function() {
      return it('修改历史版本备注', function(done) {
        return coding.files.updateFileHistoryRemark(user, project, file_id, history_id, {
          "remark": "string"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('createFile()', function() {
      return it('创建文件', function(done) {
        return coding.files.createFile(user, project, folderId, {
          "projectFile.deleted_at": "string",
          "projectFile.projects_id": "integer",
          "projectFile.files_id": "integer",
          "projectFile.comments": "integer",
          "projectFile.id": "integer",
          "folder.owner_id": "integer",
          "folder.parent_id": "integer",
          "folder.created_at": "ref",
          "folder.updated_at": "ref",
          "folder.type": "integer",
          "folder.size": "integer",
          "folder.name": "string",
          "folder.storage_type": "string",
          "folder.storage_key": "string",
          "folder.history_id": "integer",
          "folder.id": "integer",
          "name": "string",
          "content": "string",
          "folderId": "integer"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('listFileHistory()', function() {
      return it('文件历史', function(done) {
        return coding.files.listFileHistory(user, project, id, {
          "type": "integer",
          "width": "integer",
          "height": "integer"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('mkdir()', function() {
      return it('创建文件夹', function(done) {
        return coding.files.mkdir(user, project, {
          "name": "string",
          "parentId": "string"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('moveUsingPUT()', function() {
      return it('移动文件', function(done) {
        return coding.files.moveUsingPUT(user, project, dirId, {
          "fileId": "ref"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('renameFolderUsingPUT()', function() {
      return it('重命名文件夹', function(done) {
        return coding.files.renameFolderUsingPUT(user, project, dir, {
          "name": "string"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('listFile()', function() {
      return it('列出某目录下的文件', function(done) {
        return coding.files.listFile(user, project, dir, {
          "type": "integer",
          "width": "integer",
          "height": "integer",
          "page": "integer",
          "pageSize": "integer"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('listFolder()', function() {
      return it('列出所有一级目录', function(done) {
        return coding.files.listFolder(user, project, {
          "page": "integer",
          "pageSize": "integer"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('listAllFolder()', function() {
      return it('列出所有目录', function(done) {
        return coding.files.listAllFolder(user, project, {
          "page": "integer",
          "pageSize": "integer"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    return describe('allFolderFileCount()', function() {
      return it('获取文件夹的文件数', function(done) {
        return coding.files.allFolderFileCount(user, project, {}, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
  });

}).call(this);
