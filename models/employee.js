const fs = require('fs')

class Employee {
  constructor(name, position, username, password) {
    this.name = name,
    this.position = position,
    this.username = username,
    this.password = password
  }
  static register(username, password, role, callback){
    fs.readFile('employee.JSON', 'utf8', function(err, data){
        let dataArr = JSON.parse(data);
        let dataObj = {
          "username": username,
          "password": password,
          "role": role
        }
        dataArr.push(dataObj)
        let dataStr = JSON.stringify(dataArr)
        fs.writeFile('employee.JSON', dataStr, 'utf8', function(err, data){
        })
        callback(dataObj, dataArr)
    })
  }
}

module.exports = Employee
