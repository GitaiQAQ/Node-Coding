assert = require 'assert'
should = require 'should'
faker = require 'faker'

describe 'Repo_files', ->
	coding = null

	realId = "1ef6d9c909016bc8c3cdaa344d114262"
	realSecret = "4ba7a08053578fc0fd19eb86f0ff7fbf4e5d0512"

	project = "test_project"
	user = "gitai"
	new

	test_user = "dphdjy"

	branch = faker.helpers.randomize()

	before (done)->
		@timeout 60000
		coding = new require('..')
		  url:     "https://coding.net"
		  cache:   "./temp"
		data=coding.storage.load 'access_token'

		unless data? and data['access_token']?
			coding.oauth.authorize realId,realSecret,null,null,(result)->
				done()
		else
			done()

	beforeEach ->

	describe 'delete_file()', ->
		it '删除文件', (done) ->
			coding.repoFiles.delete_file user,project,delete,{"ref":"string","path":"string"},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'edit_file()', ->
		it '更新文件', (done) ->
			coding.repoFiles.edit_file user,project,edit,{"ref":"string","path":"string"},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'create_file()', ->
		it '新建文件', (done) ->
			coding.repoFiles.create_file user,project,new,{"ref":"string","path":"string"},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()



