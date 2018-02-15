const fs = require('fs')
class ModelHospital {
  // constructor(name, location, employees, patients) {
  constructor() {

    this.name = 'permata hati'
    this.employees = '1'
    this.patients = '5'
    this.location = 'sebelah rumah pak rt'
  }
}


class ModelPatient {
  constructor(id, name, diagnosis) {
    this.id = id
    this.name = name
    this.diagnosis = diagnosis
  }

  static addpasien(kirimpatient,callback){
    fs.readFile('./patient.json','utf8',function(err,data){
      var dataparsing = JSON.parse(data)
      var succes=0
        fs.readFile('./employee.json','utf8',function(err,data2){
          var dataparsing2 = JSON.parse(data2)
          if(dataparsing2[0].status===true){
            kirimpatient.id=dataparsing.length
            dataparsing.push(kirimpatient)
            let kirimparsing=JSON.stringify(dataparsing)
            fs.writeFile('./patient.json',kirimparsing,function(err){})
            succes=true
            callback(dataparsing.length,succes)
          }else{
            callback(dataparsing.length,succes)
          }

        });
    });
  }
}

class ModelEmployee {
  constructor(name, username, password, position) {
    this.name = name
    this.username = username
    this.password = password
    this.position = position
    this.status = false
  }
  static logout(callback){
    fs.readFile('./employee.json','utf8',function(err,data){
      var dataparsing = JSON.parse(data)
      for (var i = 0; i < dataparsing.length; i++) {
        dataparsing[i].status=false
      }
      let kirimparsing=JSON.stringify(dataparsing)
      fs.writeFile('./employee.json',kirimparsing,function(err){})
      callback()
    });
  }

  static register(dataemploy,callback){
    fs.readFile('./employee.json','utf8',function(err,data){
      var dataparsing = JSON.parse(data)
      dataparsing.push(dataemploy)
      let kirimparsing=JSON.stringify(dataparsing)
      fs.writeFile('./employee.json',kirimparsing,function(err){})
      callback(dataemploy,dataparsing.length)
    });
  }

  static login(username,password,callback){
    fs.readFile('./employee.json','utf8',function(err,data){
      var dataparsing = JSON.parse(data)
      let nemu=0
      var dokter=''
      for(let i=0;i<dataparsing.length;i++){
        if(dataparsing[i].username===username && dataparsing[i].password===password){
          dokter=dataparsing[i].position
          nemu++
          break;
        }
      }

      if(nemu>0){
        if(dokter==='dokter'){
          for (var i = 0; i < dataparsing.length; i++) {
            dataparsing[i].status=true
          }
          let kirimparsing=JSON.stringify(dataparsing)
          fs.writeFile('./employee.json',kirimparsing,function(err){})
        }

        callback(username)
      }else{
        callback("")
      }

    });
  }

}

module.exports={
  Hospital:ModelHospital,
  Patient:ModelPatient,
  Employee:ModelEmployee
}
