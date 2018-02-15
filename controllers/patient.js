"use strict"

const EmployeeModel = require('../models/employee.js');
const PatientModel = require('../models/patient.js');
const PatientView = require('../views/patient.js');

class PatientControl {

  static addPatient(options) {
    // console.log(options);
    EmployeeModel.checkLoginNow(function (flag) {
      if (flag) {
        PatientModel.addPatient(options, function (lengthDataObj) {
          PatientView.showMessage(`> data pasien berhasil ditambahkan. Total data pasien : ${lengthDataObj}`);
        });
      } else PatientView.showMessage(`> tidak memiliki akses untuk add patient`);
    });
  }
}

module.exports = PatientControl;