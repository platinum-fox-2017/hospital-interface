const Employee_Model = require('./employee_model.js');
const Employee_View = require('./employee_view.js');

class Employee_Controller {
    static register(username,password,position){
        Employee_Model.register(username,password,position,(data) => Employee_View.register(data));
    }
    static login(username,password){
        Employee_Model.login(username,password,(data)=>Employee_View.login(data));
    }
}

module.exports = Employee_Controller;