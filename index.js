const EmployeeControl = require('./controllers/employee.js');
const PatientControl = require('./controllers/patient.js');

let input_argv = process.argv;

let command = input_argv[2];

switch(command) {
	case 'register' : {
		let options = {
			name: input_argv[3],
			position: input_argv[5],
			username: input_argv[3],
			password: input_argv[4]
		};
		EmployeeControl.register(options);
		break;
	}
	case 'login' : {
		let options = {
			username: input_argv[3],
			password: input_argv[4]
		};
		EmployeeControl.login(options);
		break;
	}
	case 'addPatient' : {
		let options = {
			name: input_argv[3],
			diagnosis: input_argv.splice(4)
		};

		PatientControl.addPatient(options);
		break;
	}
	case 'logout' : {
		EmployeeControl.logout();
		break;
	}
}