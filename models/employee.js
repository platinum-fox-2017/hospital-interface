const fs = require('fs')

class M_Employee {
    constructor(username, password, role) {
      this.username = username
      this.password = password
      this.role = role
      this.islogin = false
    }
    static login(username, password, callback){
        fs.readFile('./employee.json', (err,data)=>{
            if(err){
                console.log(err)
            }else{
                let comment = 'failed'
                let dataJson = JSON.parse(data)
                for(let i = 0; i<dataJson.length; i++){
                    if(dataJson[i].username === username && dataJson[i].password === password){
                        comment = 'success'
                        dataJson[i].islogin = true
                    }
                }
                fs.writeFile('./employee.json', JSON.stringify(dataJson), err=>{
                    callback(username, comment)
                })
            }
        })
    }
  }

  module.exports = M_Employee