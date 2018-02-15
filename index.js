const Employee_Controller = require ('./employee_controller.js');

let argv = process.argv.slice(2);
let command = argv[0];
let username = argv[1];
let password = argv[2];
let position = argv[3];


// console.log(command)

switch(true){
    case(command === 'register'):
    Employee_Controller.register(username,password,position);
    break;
    case(command === 'login'):
    Employee_Controller.login(username,password,position);
    break;
    case(command === 'addpatient'):
    Employee_Controller.add(username,password,position);
    break;
}

