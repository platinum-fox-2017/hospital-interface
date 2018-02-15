
const fs = require('fs')

const viewData = require ('./view.js')

class Employee {
  constructor(name, position, username, password) {
    this._name = name
    this._position = position
    this._username = username
    this._password = password
  }

  static addEmployee(username, password, position, callback){
    fs.readFile('./employee.json',(err,data) =>{
      if(err) throw err
      var parseData = JSON.parse(data)
      var newObj = {
          username: username,
          password: password,
          role: position
      }
      parseData.push(newObj)
      fs.writeFile('./employee.json',JSON.stringify(parseData),function(err){
          if(err) throw err;

          callback(newObj, parseData.length)
      })
    })
  }

  static checkLogin(username, password, callback){
    fs.readFile('./employee.json',(err,data) =>{
        if(err) throw err
        let object = JSON.parse(data)
        var result = false
        var dataLogin = []
        for(let i=0; i<object.length; i++){
            if(object[i].username == username && object[i].password == password){
              result = true
              dataLogin.push(object[i])
              callback(result, username)
            }
        }
        if(result == false){
          callback(result)
        }
        fs.writeFile('./login.json',JSON.stringify(dataLogin),function(err){
          if(err) throw err;
        })
    })
  }
  
  static loginStatus(callback){
    fs.readFile('./login.json',(err,data) =>{
      if(err) throw err
      let object = JSON.parse(data)
      var result = false
      for(let i=0; i<object.length; i++){
          if(object[i].role == 'dokter'){
            result = true
            console.log(result)
            callback(result)
          }
      }
      if(result == false){
        return result
        callback(result)
      }
    })
  }

}

// Employee.loginStatus()

module.exports = Employee
