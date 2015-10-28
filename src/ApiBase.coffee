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
    @user = require('./models/Users') @client
    @project = require('./models/Projects') @client
    @task = require('./models/Tasks') @client
    @tweet = require('./models/Tweets') @client
    @file = require('./models/Files') @client
    @depot = require('./models/Depots') @client
    @blob = require('./models/Blobs') @client
    @branch = require('./models/Branchs') @client
    @commit = require('./models/Commits') @client
    @history = require('./models/Historys') @client
    @repoFile = require('./models/RepoFiles') @client
    @mergeRequest = require('./models/MergeRequests') @client
    @pullRequest = require('./models/PullRequests') @client
    @tag = require('./models/Tags') @client
    @tree = require('./models/Trees') @client
    @projectTopic = require('./models/ProjectTopics') @client
    @key = require('./models/Keys') @client