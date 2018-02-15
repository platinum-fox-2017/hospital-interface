const ModelPatient = require('./modelPatient')
const ModelEmployee = require('./modelEmployee')
const ViewEmployee= require('./viewEmployee')
const ViewPatient= require('./viewPatient')

class Controller{
    constructor(){}

    static registerEmployee(data){
        ModelEmployee.registerEmployee(data, (getTotalEmployee)=>{
            ViewEmployee.showTotal(getTotalEmployee)
        })
    }

    static loginEmployee(data){
        ModelEmployee.loginEmployee(data,(respons,status)=>{
            ViewEmployee.showLoginRespons(respons,status)
        })
    }

    static addPatient(data){
        ModelEmployee.addPatient(data,(status)=>{
            if(status === true){
                ModelPatient.addPatient(data,(totalPatient)=>{
                    ViewPatient.addPatient(totalPatient)
                })
            }else{
                console.log("Tidak memiliki akses untuk add patient")
            }
        })
    }

    static logOut(){
        ModelEmployee.logOut((name)=>{
            ViewEmployee.logOut(name)
        })
    }
}

module.exports = Controller