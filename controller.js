const ModelHospital = require('./models/model_hospital');
const ViewEmployee = require('./views/view_employee');
const ViewPatient = require('./views/view_patient');

class Controller {
    static order(command) {

        if (command[0] == 'register' && command.length == 4) {
            let dataRegister = command.splice(1, 3)

            ModelHospital.register(dataRegister, (employees) => {
                let hospital = new ModelHospital('Siloam Hospital', 'Jalan Raya Perjuangan Kav. 8, Kebon Jeruk', employees)
                ViewEmployee.register(hospital.employees)
            })
        } else if (command[0] == 'login' && command.length == 3) {
            let dataLogIn = command.splice(1, 2)
            ModelHospital.logIn(dataLogIn, (employee) => {
                ViewEmployee.logIn(employee)
            })
        }
        else if (command[0] == 'addPatient') {
            ModelHospital.roleValidation((isValid) => {
                if (isValid) {
                    let dataPatient = command.splice(1, command.length - 1)
                    ModelHospital.addPatient(dataPatient, (patient) => {
                        let hospital = new ModelHospital('Siloam Hospital', 'Jalan Raya Perjuangan Kav. 8, Kebon Jeruk', '', patient)
                        ViewPatient.addPatient(hospital.patients)
                    })
                } else {
                    ViewPatient.addPatientError()
                }
            })
        }
        else if (command[0] == 'logOut' && command.length == 1) {
            ModelHospital.logOut()
            ViewEmployee.logOut()
        }
    }
}

module.exports = Controller