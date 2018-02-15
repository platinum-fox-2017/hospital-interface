
const EmployeeController = require('./controller/employee.js')
const PatientController = require('./controller/patient.js')

const argv = process.argv

class Controller {
    static run (){
        switch (argv[2]){
            case 'register':
                EmployeeController.register(argv[3], argv[4], argv[5])
                break
            case 'login':
                EmployeeController.login(argv[3], argv[4])
                break
            case 'logout':
                EmployeeController.logout()
                break
            case 'addPatient':
                let diagnose = argv.splice(5, argv.length);
                PatientController.addPatient(argv[3], argv[4], diagnose)
                break
        }
    }
}
Controller.run()



