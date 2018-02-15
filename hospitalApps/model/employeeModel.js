const fs = require('fs')
const controller = require('../controller/controller.js')

class Employee {
  constructor(obj) {
    this.username = obj.username
    this.password = obj.password
    this.role = obj.role
    this.status = false
  }

  static bacaFile(callback) {
    fs.readFile('./employee.json', 'utf8', function(err, data){
      if(err) throw err;
      let dataObj = JSON.parse(data);
      callback(dataObj)
    })
  }

  static writeFile(data, callback) {
    fs.writeFile('./employee.json', JSON.stringify(data), (err) =>{
      if (err) throw err;
      callback()
    })
  }

  static register(username, password, role, callback) {
    Employee.bacaFile(function(data){
      let newEmployee = {}
      newEmployee.username = username
      newEmployee.password = password
      newEmployee.role = role

      data.push(new Employee(newEmployee))

      Employee.writeFile(data,function(){
        callback(data)
      })
    })
  }

  static login(username, password, callback) {
    Employee.bacaFile(function(data){
      let status = false
      for(let i=0; i<data.length; i++) {
        if(data[i].username == username && data[i].password == password) {
          data[i].status = true
          status = true
        }
      }
      Employee.writeFile(data, function(){})
      callback(status)
    })
  }

  static logout(username, callback) {
    Employee.bacaFile(function(data){
      let status = false
      for(let i=0; i<data.length; i++) {
        if(data[i].username == username) {
          data[i].status = false
          status = true
        }
      }
      Employee.writeFile(data, function(){
        callback(status)
      })
    })
  }

  static checkLogin(role, login, callback) {
    Employee.bacaFile(function(data){
      let status = false
      for(let i=0; i<data.length; i++) {
        if(data[i].role == role && data[i].status == login) {
          status = true
          console.log('masuk');
        }
      }
      callback(status)
    })
  }

}

module.exports = Employee
