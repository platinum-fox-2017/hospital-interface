const fs = require('fs')

class Employee {
  constructor(username, password, position) {
    this.username = username
    this.password = password
    this.position = position
  }
  static registerEmploy(username,password,position,callback){
    // console.log(username,password,position)
    fs.readFile('employee.json','utf8',function(err,data){
      if(err){
        console.log(err)
      }else{
        let listData = JSON.parse(data)
        let objEmpolyee = new Employee(username, password, position)
        listData.push(objEmpolyee)
        fs.writeFile('./employee.json',JSON.stringify(listData),'utf8',function(err,data){
        })
        callback(listData,objEmpolyee)
      }
      
    })
  }
}

module.exports = Employee

