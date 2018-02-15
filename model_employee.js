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
  static loginEmploy(user,pass,callback){
    fs.readFile('employee.json','utf8',function(error,data){
      if(error){
        console.log(error)
      }
      else{
        let dataEmployee = JSON.parse(data)
        // console.log(dataEmployee,'---------------')
        let temp =[]
        temp.push(user,pass)
        for(let i=0;i<dataEmployee.length;i++){
          if(user === dataEmployee[i].username && pass === dataEmployee[i].password){
            callback(true,temp)
            return
          }
        }
        callback(false,temp)
      }
    })

  }
}
// console.log(Employee.loginEmploy('budi',1234,'dokter'))
module.exports = Employee

