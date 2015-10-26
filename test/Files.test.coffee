assert = require 'assert'
should = require 'should'
#faker = require 'faker'

describe 'Files', ->
	coding = null
	realId = "1ef6d9c909016bc8c3cdaa344d114262"
	realSecret = "4ba7a08053578fc0fd19eb86f0ff7fbf4e5d0512"
	projectName = "Node-Coding"
	userName = "gitai"
	testName = "dphdjy"

	before ->
		coding = new require('..')
		  url:     "https://coding.net"
		  cache:   "./temp"

	beforeEach ->

	describe 'checkExisted()', ->
		it '检查目录下是否有同名的文件', (done) ->
			coding.files.checkExisted user,project,dir,{"names":"array"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'uploadFileHistory()', ->
		it '上传文件新版本', (done) ->
			coding.files.uploadFileHistory user,project,{},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'deleteFilesUsingDELETE()', ->
		it '删除文件', (done) ->
			coding.files.deleteFilesUsingDELETE user,project,{"fileIds":"array"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'deleteFileHistoryUsingDELETE()', ->
		it '删除文件历史', (done) ->
			coding.files.deleteFileHistoryUsingDELETE user,project,id,{},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'downloadHistory()', ->
		it '下载历史文件版本', (done) ->
			coding.files.downloadHistory user,project,id,{},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'uploadFile()', ->
		it '上传私有项目的图片', (done) ->
			coding.files.uploadFile user,project,{},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'downloadFile()', ->
		it '文件下载', (done) ->
			coding.files.downloadFile user,project,fileId,{},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'downloadURL()', ->
		it '文件下载URL', (done) ->
			coding.files.downloadURL user,project,fileId,{},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'editFile()', ->
		it '编辑文件', (done) ->
			coding.files.editFile user,project,fileId,{"name":"string","content":"string","fileId":"integer"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'viewFile()', ->
		it '查看文件', (done) ->
			coding.files.viewFile user,project,fileId,{"type":"integer","width":"integer","height":"integer","flag":"integer"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'imagePreview()', ->
		it '图片预览', (done) ->
			coding.files.imagePreview user,project,fileId,{"type":"integer","width":"integer","height":"integer"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'updateFileHistoryRemark()', ->
		it '修改历史版本备注', (done) ->
			coding.files.updateFileHistoryRemark user,project,file_id,history_id,{"remark":"string"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'createFile()', ->
		it '创建文件', (done) ->
			coding.files.createFile user,project,folderId,{"projectFile.deleted_at":"string","projectFile.projects_id":"integer","projectFile.files_id":"integer","projectFile.comments":"integer","projectFile.id":"integer","folder.owner_id":"integer","folder.parent_id":"integer","folder.created_at":"ref","folder.updated_at":"ref","folder.type":"integer","folder.size":"integer","folder.name":"string","folder.storage_type":"string","folder.storage_key":"string","folder.history_id":"integer","folder.id":"integer","name":"string","content":"string","folderId":"integer"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'listFileHistory()', ->
		it '文件历史', (done) ->
			coding.files.listFileHistory user,project,id,{"type":"integer","width":"integer","height":"integer"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'mkdir()', ->
		it '创建文件夹', (done) ->
			coding.files.mkdir user,project,{"name":"string","parentId":"string"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'moveUsingPUT()', ->
		it '移动文件', (done) ->
			coding.files.moveUsingPUT user,project,dirId,{"fileId":"ref"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'renameFolderUsingPUT()', ->
		it '重命名文件夹', (done) ->
			coding.files.renameFolderUsingPUT user,project,dir,{"name":"string"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'listFile()', ->
		it '列出某目录下的文件', (done) ->
			coding.files.listFile user,project,dir,{"type":"integer","width":"integer","height":"integer","page":"integer","pageSize":"integer"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'listFolder()', ->
		it '列出所有一级目录', (done) ->
			coding.files.listFolder user,project,{"page":"integer","pageSize":"integer"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'listAllFolder()', ->
		it '列出所有目录', (done) ->
			coding.files.listAllFolder user,project,{"page":"integer","pageSize":"integer"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'allFolderFileCount()', ->
		it '获取文件夹的文件数', (done) ->
			coding.files.allFolderFileCount user,project,{},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()



