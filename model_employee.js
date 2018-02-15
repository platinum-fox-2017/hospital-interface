
const fs = require('fs')

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
      // console.log('Total Employee :' +parseData.length)
    })
  }

  

}

// Employee.showList()

module.exports = Employee
