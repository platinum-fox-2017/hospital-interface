const HospitalModel = require('./models/HospitalModel');
const EmployeeModel = require('./models/EmployeeModel');
const PatientModel  = require('./models/PatientModel');
const EmployeeView  = require('./views/EmployeeView');
const PatientView   = require('./views/PatientView');

class Controller {
    constructor() {
        this._HospitalModel = new HospitalModel('My Hospital','Jakarta');
        this._EmployeeModel = EmployeeModel;
        this._PatientModel  = PatientModel;
        this._EmployeeView  = EmployeeView;
        this._PatientView   = PatientView;
    }

    start(option,argv1,argv2,argv3) {
        switch(option) {
            case "register":               
                            this._EmployeeModel.storeEmployee(argv1,argv2,argv3,this._EmployeeView.storedEmployee,this._HospitalModel.addEmployee);
                            break;
            case "login":                
                            this._EmployeeModel.Login(argv1, argv2,this._EmployeeView.successLogin);
                            break;
            case "addPatient":
                            this._EmployeeModel.addPatient(argv1,argv2,this._PatientModel.addNewPatient,this._PatientView.addStatus);
                            break;
            case "logout":
                            this._EmployeeModel.logout(this._EmployeeView.successLogout);
                            break;

        }
    }
}

module.exports = Controller;