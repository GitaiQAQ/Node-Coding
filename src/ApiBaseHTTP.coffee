debug = require('debug') 'coding:ApiBaseHTTP'
{ApiBase} = require './ApiBase'

_ = require 'lodash'
fs=require 'fs'

cache=require 'cache-storage'
fileCache=require 'cache-storage/Storage/FileSyncStorage'

request = require 'request'

class module.exports.ApiBaseHTTP extends ApiBase
  handleOptions: =>
    super
    debug "handleOptions()"

    unless @options.url
      throw "`url` is mandatory"

    unless @options.cache
      throw "`cache dir` is mandatory"

    if !fs.existsSync @options.cache
      throw new Error('FileStorage: directory ' + @options.cache + ' does not exists');

    if !fs.statSync(@options.cache).isDirectory()
        throw new Error('FileStorage: path ' + @options.cache + ' must be directory');

    @storage=new cache new fileCache(@options.cache),'coding'
    @request = request.defaults
      jar: true
      baseUrl:@options.url
      gzip: false
      json:true

    @request.debug = true

  init: =>
    super


  update_opts:(opts)=>
    @options = _.assign(@options,opts)

  prepare_opts: (opts) =>
    for k of opts
      unless opts[k]
        delete opts[k]
    return opts

  fn_wrapper: (fn) =>
    return (err, response, body) =>
      arity = fn.length
      if err
        throw err
      switch arity
        when 1 then fn body
        when 2 then fn err, response || JSON.parse(response.body).message
        when 3 then fn err, response, body

  head: (path, opts={}, fn=null) =>
    opts = @prepare_opts opts
    @request.head path,opts,@fn_wrapper fn

  get: (path, opts, fn=null) =>
    if 'function' is typeof query
      fn = opts
      opts = {}
    opts = @prepare_opts opts
    @request.get path,opts,@fn_wrapper fn

  post: (path, opts={}, fn=null) =>
    opts = @prepare_opts opts
    @request.post path,opts,@fn_wrapper fn

  put: (path, opts={}, fn=null) =>
    opts = @prepare_opts opts
    @request.put path,opts,@fn_wrapper fn

  del: (path, opts={}, fn=null) =>
    opts = @prepare_opts opts
    @request.del path,opts,@fn_wrapper fn

  patch: (path, opts={}, fn=null) =>
    opts = @prepare_opts opts
    @request.patch path,opts,@fn_wrapper fn