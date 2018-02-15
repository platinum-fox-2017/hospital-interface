

const fs = require('fs')

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
            let stringify = JSON.stringify(readFileData)
            Patient.writeFile(stringify,(status)=>{
                if(status){
                    callback(readFileData.length)
                }
            })
        })
    }
  }


  module.exports = Patient