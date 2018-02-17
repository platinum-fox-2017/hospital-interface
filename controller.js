
const Employee = require ('./model_employee.js')
const viewData = require ('./view.js')
const Patient = require ('./model_patient.js')

class Controller{
    constructor(){

    }

    static checkSyntax(syntax, username, password, position){
        if(syntax == 'register'){
            Employee.addEmployee(username, password, position, viewData.successAdd)
        }
        else if(syntax == 'login'){
            Employee.checkLogin(username, password, viewData.resultLogin)
        }
        else if(syntax == 'addPatient'){
            let id = username
            let name = password
            let diagnosis = position
            // console.log('ada pasien baru')
            Patient.addPatient(id, name, diagnosis)
        }
    }
}

module.exports = Controller