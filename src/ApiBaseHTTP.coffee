_ = require 'lodash'
debug = require('debug') 'coding:ApiBaseHTTP'
{ApiBase} = require './ApiBase'
querystring = require 'querystring'
cache=require 'cache-storage'
fileCache=require 'cache-storage/Storage/FileSyncStorage'
slumber = require 'slumber'
fs=require 'fs'
uuid=require 'uuid'

class module.exports.ApiBaseHTTP extends ApiBase
  handleOptions: =>
    super
    @options.base_url ?= ''

    unless @options.url
      throw "`url` is mandatory"

    unless @options.cache
      throw "`cache dir` is mandatory"

    if !fs.existsSync @options.cache
      throw new Error('FileStorage: directory ' + @options.cache + ' does not exists');

    if !fs.statSync(@options.cache).isDirectory()
        throw new Error('FileStorage: path ' + @options.cache + ' must be directory');

    @storage=new cache new fileCache(@options.cache),'coding'

    unless @options.token
      data=@storage.load 'access_token'
      if data and data.access_token
        @options.token=data.access_token

    unless @options.sid
      data=@storage.load 'sid'
      if data
        @options.sid=data
      else
        sid = uuid.v4()
        @storage.save "sid",sid
        @options.sid = sid


    @options.slumber ?= {}
    @options.slumber.append_slash ?= false

    @options.url = @options.url.replace(/\/api/, '')

    if @options.auth?
      @options.slumber.auth = @options.auth

    debug "handleOptions()"

  init: =>
    super
    api = slumber.API @options.url, @options.slumber
    @slumber = api(@options.base_url)

  update_opts:(opts)=>
    @options = _.assign(@options,opts)

  prepare_opts: (opts) =>
    opts.__query ?= {}
    if @options.token
      opts['access_token'] = @options.token
    #opts.headers = { 'access_token': @options.token }

    opts['sid'] = @options.sid

    for k of opts
      unless opts[k]
        delete opts[k]
    debug opts
    return opts

  fn_wrapper: (fn) =>
    return (err, response, ret) =>
      arity = fn.length
      switch arity
        when 1 then fn ret
        when 2 then fn err, ret || JSON.parse(response.body).message
        when 3 then fn err, response, ret

  get: (path, query={}, fn=null) =>
    if 'function' is typeof query
      fn = query
      query = {}
    opts = @prepare_opts query
    debug path
    @slumber(path).get opts, @fn_wrapper fn

  delete: (path, fn=null) =>
    opts = @prepare_opts {}
    debug path
    @slumber(path).delete opts, @fn_wrapper fn

  post: (path, data={}, fn=null) =>
    opts = @prepare_opts data
    debug path
    @slumber(path).post opts, @fn_wrapper fn

  put: (path, data={}, fn=null) =>
    opts = @prepare_opts data
    debug path
    @slumber(path).put opts, @fn_wrapper fn

  patch: (path, data={}, fn=null) =>
    opts = @prepare_opts data
    debug path
    @slumber(path).patch opts, @fn_wrapper fn