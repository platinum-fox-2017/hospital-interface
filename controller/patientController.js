"use strict"

const PatientView = require('../view/patientView.js')
const PatientModel = require('../model/patientModel.js')

class PatientController {
    static addPatient(optionArr) {
        PatientModel.addPatient(optionArr, PatientView.addPatient);
    }
}

module.exports = PatientController;