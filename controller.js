const Model = require('./model');
const View = require('./view');
const pathEmployeeFile = "./employee.json"
const pathPatientFile = "./patient.json"


class Controller{
    constructor(){
        this._userCommand = process.argv[2];
        this._userData = process.argv.slice(3);
    }

    process(){
        switch(this._userCommand){
            case 'register':
                Model.read(pathEmployeeFile,this._userData, Model.register,View.register);
                break;
            case 'login':
                Model.read(pathEmployeeFile, this._userData, Model.login,View.login);
                break;
            case 'addPatient':
                Model.read(pathEmployeeFile,this._userData,Model.check_access,Model.read,Model.addPatient,View.addPatient,pathPatientFile);
                break;
            case 'logout':
                Model.read(pathEmployeeFile,this._userData,Model.logout,View.logout);
        }
    }
}

module.exports = Controller;
