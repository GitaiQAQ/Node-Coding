BaseModel = require '../BaseModel'

class Users extends BaseModel
  current: (fn = null) =>
    @debug "Users::current()"
    @get "account/current_user", (data) =>
      fn data if fn

module.exports = (client) -> new Users client