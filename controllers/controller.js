const ModelHospital = require('../models/hospital')
const ModelPatient = require('../models/patient')
const ModelEmployee = require('../models/employee')
const View = require('../views/view')

class Controller {
    constructor() {}

    static registerFunc(data) {
        for (let i = 0; i < data.length; i++) {
            if (data[i] === 'dokter' || data[i] === 'admin') {
                ModelEmployee.registerFunc(data, (dataEmployee ,totalEmployee) => {
                    View.registerFunc(dataEmployee, totalEmployee)
                })
            }
        }
    }

    static loginFunc(data) {
        ModelEmployee.loginFunc(data, View.loginFunc)
    }

    static addPatientFunc(data) {
        ModelPatient.addPatientFunc(data, View.addPatientFunc)
    }

    static logoutFunc() {
        ModelEmployee.logoutFunc(View.logoutFunc);
    }
}

module.exports = Controller