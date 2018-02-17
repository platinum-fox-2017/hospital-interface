const fs = require('fs');
var registerview = require('./registerview.js');
var loginview = require('./loginview.js');
var argv = process.argv;

class Employee {
  constructor(username,password,position) {
    this.username = username;
    this.password = password;
    this.position = position;
  }

  static modelRegister(callback){
    fs.readFile('./employee.json', 'utf8', function(err, data){
      let employeeList = JSON.parse(data);
      let inputEmployee = new Employee(argv[3],argv[4],argv[5]);
      employeeList.push(inputEmployee);
      let newFormat = JSON.stringify(employeeList);
      fs.writeFile('./employee.json', newFormat, 'UTF-8', function(err){
        if (err) throw err;
        callback(`{"username":"${argv[3]}","password":"${argv[4]}","role":"${argv[5]}"}`,employeeList.length);
      });
    });
  }

  static modelLogin(callback){
    fs.readFile('./employee.json', 'utf8', function(err, data){
      let employeeList = JSON.parse(data);
      let count = 0;
      let status = false;
      for(let i=0; i<employeeList.length; i++){
        var belakang = employeeList[employeeList.length-1];
        var current = employeeList[i];
        if(employeeList[i].username===argv[3] && employeeList[i].password===argv[4]){
          count++;
          employeeList[i]=belakang;
          employeeList[employeeList.length-1]=current;
        }
      }
      if(count===1){
        status = true;
      }
      callback(status,argv[3]);
      let newFormat = JSON.stringify(employeeList);
      fs.writeFile('./employee.json', newFormat, 'UTF-8', function(err){
        if (err) throw err;
      });
    });
  }
}

module.exports = Employee;
