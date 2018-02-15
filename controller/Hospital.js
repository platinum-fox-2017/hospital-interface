const EmployeeModel = require('../model/Employee');
const HospitalModel = require('../model/Hospital');
const PatientModel = require('../model/Patient');

const HospitalView = require('../view/Hospital')

class Hospital {

    static run(commands, content){
        let model = new HospitalModel('Hacktiv8', 'Jl Sultan Iskandar Muda');
        let diagnosis = [];
        for (let i=2; i<content.length; i++){
            diagnosis.push(content[i])
        }
        switch(commands){
            case 'register': model.employeeRegister(content[0], content[1], content[2], model.writeFileEmployee, HospitalView.register); break;
            case 'login' : model.employeeLogin(content[0], content[1], model.writeFileEmployee , HospitalView.login); break;
            case 'addPatient' : model.addPatient(content[0], content[1], diagnosis, model.writeFilePatient, HospitalView.addPatient); break;
        }
    }
}

module.exports = Hospital;