const fs = require('fs')

class Employee {
  constructor(username, password, position) {
    this.username = username
    this.password = password
    this.position = position
  }
  static readFile(file,type,callback){
    fs.readFile(file,type,function(err,data){
      if(err){
        console.log(err)
      }else{
        callback(data)
      }
    })
  }
  static registerEmploy(username,password,position,callback){
    // console.log(username,password,position)
    let file = 'employee.json'
    Employee.readFile(file,'utf-8',function(dataEmployees){
      let listData = JSON.parse(dataEmployees)
        let objEmpolyee = new Employee(username, password, position)
        listData.push(objEmpolyee)
        fs.writeFile('employee.json',JSON.stringify(listData),'utf8',function(err,data){
        })
        callback(listData,objEmpolyee)

    })
    
  }

  static loginEmploy(user,pass,callback){
    Employee.readFile('employee.json','utf8',function(dataEmployees){
      let dataEmployee = JSON.parse(dataEmployees)
        // console.log(dataEmployee,'---------------')
        let temp =[]
        
        for(let i=0;i<dataEmployee.length;i++){
          if(user === dataEmployee[i].username && pass === dataEmployee[i].password){
            // temp.push(dataEmployee[i].username,dataEmployee[i].password,dataEmployee[i].position)
            let obj = {
              username: dataEmployee[i].username,
              password : dataEmployee[i].password,
              position : dataEmployee[i].position
            }
            temp.push(obj)
            fs.writeFile('sessionlogin.json',JSON.stringify(temp),'utf8',function(err,data){
            })
            callback(true,temp)
            
            return
          }
        }
        
        callback(false,temp)
    })

  }
  static logoutEmploy(callback){
    let arr =[]
    fs.writeFile('sessionlogin.json',JSON.stringify(arr),'utf8',function(err,data){
      if(err){
        console.log(err)
      }else{
        let user = 'berhasil log out dari system'
        callback(user)
      }
    })
    

  }
}
// console.log(Employee.loginEmploy('budi',1234,'dokter'))
module.exports = Employee

