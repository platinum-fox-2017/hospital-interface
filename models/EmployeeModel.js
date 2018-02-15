const fs = require('fs');
class Employee {
  constructor( username, password, position) {
    this.username = username
    this.position = position
    this.password = password
  }
  register (callback){
    fs.readFile('employee_data.json',(err,data)=>{
      data = JSON.parse(data);
      data.push(this);
      callback(this,data.length);
      data = JSON.stringify(data);
      fs.writeFile('employee_data.json',data,(err)=>{});

    })
  }
}
module.exports = Employee;
