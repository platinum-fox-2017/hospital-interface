const fs = require("fs")

class ModelEmployee {
  constructor(username,password, position) {
    this.username = username
    this.password = password
    this.position = position
    this.status = false
  }
  static readData(file,callback){
    fs.readFile(file,'utf-8',function(err,dataJson){
      if(err) throw err
      callback(JSON.parse(dataJson))
    })
  }

  static saveData(file,dataStr){
    fs.writeFile(file,JSON.stringify(dataStr),function(err){
      if(err) throw err
    })
  }

  static register(dataRegister,callback){
    let employeeFile = ('./datas/dataEmployee.json')
    ModelEmployee.readData(employeeFile,function(dataEmployee){
      let newEmployee = new ModelEmployee(dataRegister[0],dataRegister[1],dataRegister.slice(2).join(''))
      dataEmployee.push(newEmployee)
      ModelEmployee.saveData(employeeFile,dataEmployee)
      callback(dataEmployee,newEmployee)
    })
  }

  static login(dataEmployee,callback){
    let employeeFile = ('./datas/dataEmployee.json')
    ModelEmployee.readData(employeeFile,function(dataJson){
      for(let i = 0 ; i < dataJson.length ; i++){
        if(dataJson[i].status === true){
          callback(true)
          return
        }
        if(dataJson[i].username == dataEmployee[0] && dataJson[i].password == dataEmployee[1]){
          dataJson[i].status = true
          ModelEmployee.saveData(employeeFile,dataJson)
          callback(true,dataEmployee[0])
          return
        }
      }
      callback(false)
    })
  }

  static validasiData(callback){
    let employeeFile = ('./datas/dataEmployee.json')
    ModelEmployee.readData(employeeFile,function(dataJson){
      for(let i = 0 ; i < dataJson.length ; i++){
        if(dataJson[i].position === 'dokter' && dataJson[i].status === true){
          callback(true)
          return
        }
      }
      callback(false)
    })
  }

  static logout(callback){
    let employeeFile = ('./datas/dataEmployee.json')
    ModelEmployee.readData(employeeFile,function(dataJson){
      for(let i = 0 ; i < dataJson.length ;i++){
        if(dataJson[i].status === true){
          dataJson[i].status = false
          ModelEmployee.saveData(employeeFile,dataJson)
          callback(dataJson[i].username)
        }
      }
    })
  }



}

module.exports = ModelEmployee
