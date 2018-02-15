const EmployeeControl = require('./controllers/employee.js');

let input_argv = process.argv;

let command = input_argv[2];
// console.log(input_argv);

switch(command) {
	case 'register' : {
		let employee = new EmployeeControl(input_argv[3], input_argv[5], input_argv[3], input_argv[4]);
		// console.log(employee);
		employee.execute(command);
	}
}