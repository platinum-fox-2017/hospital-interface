const M_Hospital = require('../models/hospital')
const M_Employee = require('../models/employee')
const V_Hospital = require('../views/hospital')

class C_Hospital{
    static registerEmployee(username,password, role){
        let m_hospital = new M_Hospital()
        let newEmployee = new M_Employee(username,password, role)
        m_hospital.registerEmployee(newEmployee,(employee, datalength)=>{
        V_Hospital.showRegisEmp(employee, datalength)
        })
    }
}

module.exports = C_Hospital