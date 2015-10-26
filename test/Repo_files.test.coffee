assert = require 'assert'
should = require 'should'
#faker = require 'faker'

describe 'Repo_files', ->
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

	describe 'delete_file()', ->
		it '删除文件', (done) ->
			coding.repoFiles.delete_file user,project,file,{"ref":"string","path":"string"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'edit_file()', ->
		it '更新文件', (done) ->
			coding.repoFiles.edit_file user,project,file,{"ref":"string","path":"string"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'create_file()', ->
		it '新建文件', (done) ->
			coding.repoFiles.create_file user,project,file,{"ref":"string","path":"string"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()



