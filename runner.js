const Controller = require('./controller')

class Runner{
    constructor(){}

    static registerEmployee(data){
        Controller.registerEmployee(data)
    }

    static loginEmployee(data){
        Controller.loginEmployee(data)
    }

    static addPatient(data){
        Controller.addPatient(data)
    }

    static logOut(){
        Controller.logOut()
    }
}


let argv = process.argv.slice(2,process.argv.length)

let command = argv[0]

let data = argv.slice(1,argv.length)


switch(command){
    case('register'):
    Runner.registerEmployee(data)
    break;
    case('login'):
    Runner.loginEmployee(data)
    break;
    case('addPatient'):
    Runner.addPatient(data)
    break;  
    case('logout'):
    Runner.logOut()
    break;
}