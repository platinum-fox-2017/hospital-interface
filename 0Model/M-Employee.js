const fs = require('fs');

class Employee {
  constructor(name, position, username, password) {
    this.name = name
    this.position = position
    this.username = username
    this.password = password
  }
  
  static readFile(cb){
    fs.readFile('./3JSON/Employee.json','utf8',function(err,data) {
      if(err) throw err;
      var dataObj = JSON.parse(data);
      cb(dataObj);
    })
  }

  static writeFile(data,cb){
    var dataJSON = JSON.stringify(data);
    fs.writeFile('./3JSON/Employee.json',dataJSON,(err) =>{
      if(err) throw err;
      cb();
    })
  }

  static register(username,password,role,cb) {
    var newDataObj = {};
    newDataObj.username = username;
    newDataObj.password = password;
    newDataObj.role = role;

    Employee.readFile(function(dataObj){
      dataObj.push(newDataObj);
      // console.log(dataObj); // [ { username: 'lala', password: 'lili', role: 'lolo' } ]

      Employee.writeFile(dataObj,function(){
        // console.log(`save data success`)
        cb(dataObj);
      })

    })
    


  }



}
  

module.exports = Employee;