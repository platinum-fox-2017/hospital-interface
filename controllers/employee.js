const M_Employee = require('../models/employee')
const V_Hospital = require('../views/hospital')

class C_Employee{
    static login(username, password){
        M_Employee.login(username, password, (username, comment)=>{
        V_Hospital.showLoginStatus(username, comment)
        })
    }
}

module.exports = C_Employee