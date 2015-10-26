debug = require('debug') 'coding:ApiBase'

class module.exports.ApiBase
  constructor: (@options) ->
    do @handleOptions
    do @init
    debug "constructor()"

  handleOptions: =>
    @options.verbose ?= false
    debug "handleOptions()"

  init: =>
    @client = @
    debug "init()"
    @oauth = require('./models/OAuth') @client
    @users = require('./models/Users') @client
    @projects = require('./models/Projects') @client
    @projectTopics = require('./models/Project_topics') @client
    @commits = require('./models/Commits') @client
    @branchs = require('./models/Branchs') @client
    @trees = require('./models/Trees') @client
    @mergeRequests = require('./models/Merge_requests') @client
    @pullRequests = require('./models/Pull_requests') @client
    @repoFiles = require('./models/Repo_files') @client
    @tasks = require('./models/Tasks') @client
    @blobs = require('./models/Blobs') @client
    @depots = require('./models/Depots') @client
    @files = require('./models/Files') @client
    @historys = require('./models/Historys') @client
    @keys = require('./models/Keys') @client
    @tags = require('./models/Tags') @client
    @tweets = require('./models/Tweets') @client