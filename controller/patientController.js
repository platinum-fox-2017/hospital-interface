"use strict"

const PatientView = require('../view/patientView.js')
const PatientModel = require('../model/patientModel.js')

class PatientController {
    static addPatient(flag, optionArr) {
        if(flag) {
            PatientModel.addPatient(optionArr, PatientView.addPatient)
        }
        else {
            PatientView.accessDenied();
        }
    }
}

module.exports = PatientController;