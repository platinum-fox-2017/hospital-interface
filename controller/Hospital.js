const EmployeeModel = require('../model/Employee');
const HospitalModel = require('../model/Hospital');
const PatientModel = require('../model/Patient');

const HospitalView = require('../view/Hospital')

class Hospital {

    static run(commands, content){
        let model = new HospitalModel('Hacktiv8', 'Jl Sultan Iskandar Muda');
        switch(commands){
            case 'register': model.employeeRegister(content[0], content[1], content[2], model.writeFile, HospitalView.register); break;
            case 'login' : model.employeeLogin(content[0], content[1], HospitalView.login); break;
        }
    }
}

module.exports = Hospital;