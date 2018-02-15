
const Employee = require ('./model_employee.js')
const viewData = require ('./view.js')

class Controller{
    constructor(){

    }

    static checkSyntax(syntax, username, password, position){
        if(syntax == 'register'){
            Employee.addEmployee(username, password, position, viewData.successAdd)
        }
    }
}

module.exports = Controller