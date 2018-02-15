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
                        let arr = []                       
                        let obj = {
                            role : dataJson[i].role
                        }
                        arr.push(obj)
                        fs.writeFile('./session.json', JSON.stringify(arr), err=>{
                            callback(username, comment)
                        })
                    }
                }
            }
        })
    }
    static logout(callback){
        let arrAut = []
        fs.writeFile('./session.json', JSON.stringify(arrAut), err=>{
            callback(true)
        })
    }
  }

  module.exports = M_Employee
  