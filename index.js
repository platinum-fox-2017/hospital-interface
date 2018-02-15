const fs = require('fs');

let modelEmploye = require('./model_employe.js')
// let modelPatient = require('./model_patient.js')

let viewEmploye = require('./view_employe.js')
// let viewPatient = require('./view_patient.js')


var _argv = process.argv;
let execute;
switch(_argv[2]){
    case 'register': execute = modelEmploye.register(viewEmploye.viewList); break; // done
    case 'login': execute = modelEmploye.login(viewEmploye.viewLogin); break; // done
    case 'addPatient': execute = modelEmploye.login(viewEmploye.viewLogin); break; // done
    default : execute = 'HAHAHAHA';
}