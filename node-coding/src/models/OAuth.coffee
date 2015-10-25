util = require 'util'
http = require 'http'
clui = require 'clui'
urlparse = require('url').parse
queryparse = require('querystring').parse

BaseModel = require '../BaseModel'

class Oauth extends BaseModel
  authorize: (id, secret, port = 8001, scope = ["user", "user:email", "notification", "social", "social:tweet", "project", "project:task", "project:depot"], fn = null) =>
    @debug "Oauth::authorize()"

    data=@storage.load 'access_token'
    if data?
      fn data if fn
    else
      url = util.format "https://coding.net/oauth_authorize.html?client_id=%s&redirect_uri=http://localhost:%s/oauth/callback&response_type=code&scope=%s", id, port, scope.join(",")
      console.log url

      i=60
      int=0

      countdown = new clui.Spinner 'Close server in ' + i + ' seconds...'

      server = http.createServer (req, res) =>
        url = urlparse(req.url)
        if url.pathname isnt '/oauth/callback'
          return
        query = queryparse url.query
        data = "<script language=\"javascript\">open(location, '_self').close();</script>"
        res.writeHead 200,
            'Content-Type':   'text/html'
            'Content-Length': data.length
        res.end data

        server.close()

        @get_token id, secret, query.code, fn

      server.on 'close',=>
        clearInterval(int)
        countdown.stop()

      server.listen port,->
        countdown.start()
        int = setInterval =>
          i--
          countdown.message 'Close server in ' + i + ' seconds...'
          if i is 0
            server.close()
        , 1000

  get_token: (id, secret, code, fn = null) =>
    @debug "Oauth::token()"
    @debug code
    @get util.format("oauth/access_token?client_id=%s&client_secret=%s&grant_type=authorization_code&code=%s",id, secret, code), (data) =>
      @storage.save "access_token",data
      fn data if fn

module.exports = (client) -> new Oauth client