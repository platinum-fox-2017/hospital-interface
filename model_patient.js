// const Employee = require ('./model_employee.js')
const fs = require('fs')

class Patient {
  constructor(id, name, diagnosis) {
    this.id = id
    this.name = name
    this.diagnosis = diagnosis
  }

  static addPatient(id, name, diagnosis){
    fs.readFile('./patient.json',(err,data) =>{
      if(err) throw err
      var parseData = JSON.parse(data)
      var newObj = {
          id: parseData.length+1,
          name: name,
          diagnosis: diagnosis
      }
      parseData.push(newObj)
      fs.writeFile('./patient.json',JSON.stringify(parseData),function(err){
          if(err) throw err;

          // callback(newObj, parseData.length)
      })
    })
  }

}

// Patient.addPatient()
module.exports = Patient