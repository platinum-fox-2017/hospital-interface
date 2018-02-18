const fs = require('fs');

class ModelPatient {
  constructor(id, name, diagnosis) {
    this.id = id
    this.name = name
    this.diagnosis = diagnosis
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

  static addPatient(dataPatient,callback){
    let patientFile = ('./datas/dataPatient.json')
    ModelPatient.readData(patientFile,function(dataJson){
      let newPatient = new ModelPatient(dataJson.length+1,dataPatient[0],dataPatient.slice(1))
      dataJson.push(newPatient)
      ModelPatient.saveData(patientFile,dataJson)
      callback(dataJson)
    })


  }
}

module.exports = ModelPatient
