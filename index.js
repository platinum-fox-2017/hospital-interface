let Controller = require('./controllers/controller')

let command = process.argv
let input_task = process.argv[2];
let data = command.slice(3, command.length)

if (input_task === 'register') {
    Controller.registerFunc(data)
} else if (input_task === 'login') {
    Controller.loginFunc(data)
} else if (input_task === 'addPatient') {
    Controller.addPatientFunc(data)
} else if (input_task === 'logout') {
    Controller.logoutFunc()
} else {
    console.log('Sorry, task not found!');
}
