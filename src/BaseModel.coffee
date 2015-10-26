debug = require('debug') 'coding:BaseModel'


class module.exports
  constructor: (@client) ->
    do @_init

  load: (model) =>
    require("./Models/#{model}") @client

  _init: =>
    @debug =   require('debug') "coding:Models:#{@constructor.name}"

    @get =     @client.get
    @post =    @client.post
    @put =     @client.put
    @delete =  @client.delete

    @storage = @client.storage

    do @init if @init?