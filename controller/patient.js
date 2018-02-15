const PatientModel = require('../model/patient.js')
const PatientView = require('../view/patient.js')

class PatientController {
    static addPatient(id, name, diagnose){
        PatientModel.addPatient(id, name, diagnose, PatientView.addPatient, PatientView.error)
    }
}

module.exports = PatientController