util = require 'util'
http = require 'http'
enableDestroy = require 'server-destroy'
url  = require 'url'
clui = require 'clui'
qs = require 'querystring'

BaseModel = require '../BaseModel'

class Oauth extends BaseModel

  ###

   method   : get
   operationId  : authorize
   description  : OAuth 授权
   path     : id,secret,port,scope

  ###

  authorize: (id, secret, port = 8001, scope = ["user", "user:email", "notification", "social", "social:tweet", "project", "project:task", "project:depot"], fn = null) =>
    @debug "Oauth::authorize()"

    data=@storage.load 'access_token'
    if data?
      fn data if fn
    else
      url_authorize = url.format({
        "protocol":"https",
        "host":"coding.net",
        "pathname":"/oauth_authorize.html",
        "search":qs.stringify({
            "client_id":id,
            "redirect_uri":url.format({
                  "protocol":"http"
                  "hostname":"localhost"
                  "port":port
                  "pathname":"oauth/callback"}),
            "response_type":"code",
            "scope":scope.join(",")
          })
        })
      console.log url_authorize

      code=null

      server = http.createServer (req, res) =>
        urlObj = url.parse req.url
        if urlObj.pathname isnt '/oauth/callback'
          return
        query = qs.parse urlObj.query
        data = "<script language=\"javascript\">open(location, '_self').close();</script>"
        res.writeHead 200,
            'Content-Type':   'text/html'
            'Content-Length': data.length
        res.end data
        code=query.code

      int=0
      i=60
      countdown = new clui.Spinner 'Close server in ' + i + ' seconds...'

      server.listen port,=>
        enableDestroy server
        countdown.start()
        int = setInterval =>
          i--
          countdown.message 'Close server in ' + i + ' seconds...'
          if !i or code
            clearInterval(int)
            countdown.stop()
            server.destroy()
            @getToken id,secret,code,fn
        , 1000

  ###

   method   : get
   operationId  : getToken
   description  : Token 授权
   path     : id, secret, code

  ###

  getToken: (id, secret, code, fn = null) =>
    @debug "Oauth::token()"
    @debug code
    params =
      "client_id":id
      "client_secret":secret
      "grant_type":"authorization_code"
      "code":code
    @get "oauth/access_token",params,(data) =>
      if data and data.access_token
        @update_opts
          token:data.access_token
        @storage.save "access_token",data,{
          "expire":{
            "seconds":data.expires_in
            }
          }
      fn data if fn

  ###

   method   : get
   operationId  : clean
   description  : 清理 OAuth

  ###

  clean: (fn = null) =>
    @debug "Oauth::clean()"
    @storage.clean("all")


module.exports = (client) -> new Oauth client