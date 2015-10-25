id = "2deaa488ed11bf3d1c7f37bdfd58ec54"
secret = "37124c46b1105ce9f0495259e5c08e0465a045d5"
port = 8001
scope = ["user", "user:email", "notification", "social", "social:tweet", "project", "project:task", "project:depot"]

fapi = new Api({
    url: 'https://coding.net',
    cache: "./temp"
})

fapi.users.current(data) ->
    console.log data
