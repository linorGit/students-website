//  fetch is not defined in node
var fetch = require('node-fetch')

var checkLogin = (loginUser)=>{
    return new Promise(async(resolve)=>{
        var resp = await fetch("https://jsonplaceholder.typicode.com/users")
        var checkUser = []
        if(resp.ok){
            var users = await resp.json()
            checkUser = users.filter(user=>user.username==loginUser.username&&user.email==loginUser.email)
        }
        resolve(checkUser.length>0)
        })
}

module.exports = {checkLogin}
