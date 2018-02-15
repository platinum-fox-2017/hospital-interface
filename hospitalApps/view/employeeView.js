"use strict"

const employeeModel = require('../view/employeeView.js')
const controller = require('../controller/controller.js')

class EmployeeView {

  static saveDataEmployee(data) {
    console.log(`save data success ${JSON.stringify(data[data.length-1])}`)
    console.log(`Total employee : ${data.length}`);
  }

  static login(username, data) {
    if(data == true) {
      console.log(`user ${username} logged in successfully`);
    } else {
      console.log(`username / password wrong`);
    }
  }

  static logout(data) {
    if(data == true) {
      console.log('kamu berhasil logout!');
    }
  }

  static saveDataPatient(data) {
    console.log(`Save data success ${JSON.stringify(data[data.length-1])}`)
    console.log(`Total patient : ${data.length}`);
  }

  static saveDataPatientGagal() {
    console.log(`Tidak memiliki akses untuk add patient`);
  }

  static listHelp() {
    console.log(`Welcome to hospital aplication`);
    console.log(`register     : untuk mendaftarkan karyawan`);
    console.log(`login        : login aplikasi`);
    console.log(`addPatient   : menambahkan patient, hanya untuk dokter`);
    console.log(`logout       : logout aplikasi`);
  }

}

module.exports = EmployeeView
