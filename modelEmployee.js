

const fs = require('fs')

class Employee {
    constructor(name, position, username, password) {
      this.name = name
      this.position = position
      this.username = username
      this.password = password
      this.status = false
    }


    static readFile(callback){
        fs.readFile('employee.json','UTF-8',(err,data)=>{
            callback(JSON.parse(data))
        })
    }

    static writeFile(data,callback){
        fs.writeFile('employee.json', data, 'UTF-8', (err) => {
            if (err){
                throw err;
            } else{
                callback(true)
            }
          });
    }

    static registerEmployee(data,callback){
        Employee.readFile((readFileData)=>{
            let newEmployee = new Employee (data[0],data[1],data[2],data[3])
            
            const checkDoubleId = readFileData.filter(each=>{
                if(each.username === data[2]){
                    return each
                }
            })
            if(checkDoubleId.length > 0){
                callback(false)
            }else{
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

    static loginEmployee(data, callback){
        Employee.readFile((readFile)=>{
            let username = data[0]
            let password = data[1]

            const checkData = readFile.filter(each=>{
                if(each.status === true){
                    return each
                }
            })

            if(checkData.length > 0){
                let responsLogged = `Somebody has logged in`
                callback(responsLogged,false)
            }else{
                let count = 0
                let name;
                const checkingData = readFile.map(each=>{
                    if(each.username === username && each.password === password){
                        each.status = true
                        name = each.name
                        count++
                    }
                    return each
                })

                if(count === 0){
                    let responsIdUndefined = `Username or password has wrong input`
                    callback(responsIdUndefined,false)
                }else{
                    let stringified = JSON.stringify(checkingData)
                    Employee.writeFile(stringified,(status)=>{
                        if(status){
                            callback(name,status)
                        }
                    })
                }
            }
        })
    }

    static addPatient(data,callback){
        Employee.readFile((readFile)=>{
            const checkRole = readFile.filter(each=>{
                if(each.status === true && each.position === "Dokter"){
                    return each
                }
            })

            if(checkRole.length === 0){
                callback(false)
            }else{
                callback(true)
            }
        })   
    }

    static logOut(callback){
        Employee.readFile((readFileData)=>{
            let name;
            const logOut = readFileData.map(each=>{
                if(each.status === true){
                    each.status = false
                    name = each.username
                }
                return each
            })

            let stringified = JSON.stringify(logOut)
            Employee.writeFile(stringified,(data)=>{
                callback(name)
            })
        })
    }
  }

  module.exports = Employee