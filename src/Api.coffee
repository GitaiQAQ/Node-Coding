debug = require('debug') 'coding:Api'
{ApiBaseHTTP} = require './ApiBaseHTTP'

class module.exports.Api extends ApiBaseHTTP
  handleOptions: =>
    super
    @options.base_url = 'api'
    debug "handleOptions()"