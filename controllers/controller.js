const M_Hospital = require('../models/m_hospital')
const M_Employee = require('../models/m_employee')
const M_Patient = require('../models/m_patient')
const View = require('../views/view')

class C_Hospital{
    static registerEmployee(username,password, role){
        let newEmployee = new M_Employee(username,password, role)
        M_Hospital.registerEmployee(newEmployee,(employee, datalength)=>{
            View.showRegisEmp(employee, datalength)
        })
    }
    static login(username, password){
        M_Employee.login(username, password, (username, comment)=>{
            View.showLoginStatus(username, comment)
        })
    
    }
    static addPatient(id, nama, diag){
        let newPatient = new M_Patient(id, nama, diag)
        M_Hospital.addPatient(newPatient, (status,length)=>{
            View.showAddPatient(status, length)
        })
    }
}

module.exports = C_Hospital