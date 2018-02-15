var Model = require('./model.js')
var View = require('./view.js')

var ModelHospital=Model.Hospital
var ModelEmployee=Model.Employee
var ModelPatient=Model.Patient
var ViewHospital = View.Hospital
var ViewPatient = View.Patient
var ViewEmployee = View.Employ



class Controller{
  constructor(argv){
    this._hospital=new ModelHospital()
    this._run = this.run(argv)
  }

  run(argv){
    if(argv[2]==='register'){
      let kirimemploy=new ModelEmployee(argv[3],argv[3],argv[4],argv[5])
      ModelEmployee.register(kirimemploy,ViewEmployee.register)
    }
    else if(argv[2]==='login'){
      ModelEmployee.login(argv[3],argv[4],ViewEmployee.login)
    }
    else if(argv[2]==='addPatient'){
      let diagnosa=[]
      for(let i=4;i<argv.length;i++){
        diagnosa.push(argv[i])
      }
      let kirimpatient=new ModelPatient(0,argv[3],diagnosa)
      ModelPatient.addpasien(kirimpatient,ViewPatient.addpasien)
    }
    else if(argv[2]==='logout'){
      ModelEmployee.logout(ViewEmployee.logout)

    }
  }
}

module.exports=Controller
