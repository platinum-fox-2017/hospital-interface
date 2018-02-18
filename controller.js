const ModelEmployee = require('./models/modelEmployee');
const ModelPatient = require('./models/modelPatient');
const ViewEmployee = require('./views/viewEmployee');
const ViewPatient = require('./views/viewPatient');

class Controller{
  static commandManage(command){
    if(command[0] === 'register' && command.length === 4){
      let register = command.slice(1)
      ModelEmployee.register(register,function(dataJson,dataStr){
        ViewEmployee.showRegister(dataJson,dataStr)
      })
    }else if(command[0] === 'help' || command.length === 0){
      ViewEmployee.showHelp()
    }else if (command[0] === 'login'){
      let login = command.slice(1)
      ModelEmployee.login(login,function(statusLogin,userLogin){
        ViewEmployee.showLogin(statusLogin,userLogin)
      })
    }else if(command[0] === 'addPatient'){
      let dataPatient = command.slice(1)
      ModelEmployee.validasiData(function(validasi){
        if(validasi === true){
          ModelPatient.addPatient(dataPatient,function(dataJson){
            ViewPatient.showPatient(dataJson)
          })
        }else{
          ViewEmployee.forbiden()
        }
      })
    }else if (command[0] === 'logout'){
      ModelEmployee.logout(function(username){
        ViewEmployee.showLogout(username)
      })
    }
  }

}

module.exports = Controller
