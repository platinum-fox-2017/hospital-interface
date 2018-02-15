const MEmployee = require('../0Model/M-Employee.js');
const VEmployee = require('../1View/V-Employee.js');


class Controller {

    static runCommand(argv_data) {
        var command = argv_data[2];
        var arrInput = argv_data.slice(3);

        switch(command) {
            case 'register': this.register(arrInput[0],arrInput[1],arrInput[2]); break;
        }
    }

    static register(username,password,role) {
        MEmployee.register(username,password,role,function(obj){
            // console.log(obj); // [ { username: 'lala', password: 'lili', role: 'lolo' } ]
            VEmployee.showLogRegister(obj);
        });
    }






}



module.exports = Controller;

