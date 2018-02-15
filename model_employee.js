
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
        for(let i=0; i<object.length; i++){
            if(object[i].username == username && object[i].password == password){
              result = true
              callback(result, username)
            }
        }
        if(result == false){
          callback(result)
        }
    })
  }
  

}

// Employee.showList()

module.exports = Employee
