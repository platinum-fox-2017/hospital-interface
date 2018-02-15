"use strict"
const fs = require('fs')

class Employee {
    constructor(name, position, username, password) {
      this.name = name
      this.position = position
      this.username = username
      this.password = password
    }

    static readFile(callback){
      fs.readFile('./employee.json','UTF-8',(err,data)=>{
        callback(JSON.parse(data))
      })
    }

    static writeFile(data,callback){
      fs.writeFile('./employee.json', data, 'UTF-8', (err) => {
        if (err){
          throw err;
        }
        else{
          callback(true)
        }
      });
    }

    static register(data,callback){
      Employee.readFile((readFileData)=>{
        let newEmployee = new Employee (data[0],data[1],data[2],data[3])
          const checkDoubleId = readFileData.filter(each=>{
            if(each.username === data[2]){
              return each
            }
          })
        if(checkDoubleId.length > 0){
          callback(false)
        }
        else{
          readFileData.push(newEmployee)
          let stringified = JSON.stringify(readFileData)
          Employee.writeFile(stringified,(status)=>{
            if(status){
              let total = readFileData.length
            callback(total)
            }
          })
        }
      })
    }

    static login(data, callback){
      Employee.readFile((readFile)=>{
        let username = data[0]
        let password = data[1]
        let cek = false
        let message
        let validation = readFile.map(each=>{
          if(each.username === username && each.password === password){
            cek = true
          }
        })
          if(cek === true){
             message = 'Login Sukses'
              callback(message)
          }
          else{
            let message = 'Username atau Password salah'
              callback(message)
          }

      })
    }
  }

  class Patient {
      constructor(id, name, diagnosis) {
        this.id = id
        this.name = name
        this.diagnosis = diagnosis
      }

      static readFile(callback){
          fs.readFile('patient.json','UTF-8',(err,data)=>{
              callback(JSON.parse(data))
          })
      }

      static writeFile(data,callback){
          fs.writeFile('patient.json',data,'UTF-8',(err)=>{
              if(err){
                  console.log(err)
              }else[
                  callback(true)
              ]
          })
      }

      static addPatient(data,callback){
          Patient.readFile((readFileData)=>{
              let id = readFileData.length + 1
              let name = data[0]
              let diagnosis = data.slice(1,data.length)
              let newPatient = new Patient(id,name,diagnosis)
              readFileData.push(newPatient)
              let parseJson = JSON.stringify(readFileData)
              Patient.writeFile(stringify,(status)=>{
                  if(status){
                      callback(readFileData.length)
                  }
              })
          })
      }
    }

module.exports = {
    Employee,
    Patient
}
