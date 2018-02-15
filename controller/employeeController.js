"use strict"
const EmployeeModel = require('../model/employeeModel.js');
const EmployeeView = require('../view/employeeView.js');
const PatientControl = require('./patientController.js');

class EmployeeControl {

    static readCommand(command, optionArr) {
        switch(command) {
            case "register": EmployeeModel.register(optionArr, EmployeeView.register);
                break;
            case "login": EmployeeModel.login(optionArr,EmployeeView.isLoggedIn , EmployeeView.login);
                break;
            case "logout": EmployeeModel.logout(EmployeeView.logout);
                break;
            case "addPatient": 
                EmployeeModel.isDoctor(optionArr, EmployeeView.accessDenied, PatientControl.addPatient)
                // EmployeeModel.isLoggedIn(optionArr, PatientControl.addPatient);
                break;

            default: break;
        }
    }
}

module.exports = EmployeeControl;