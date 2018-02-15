const fs = require('fs');

class Employee_Model {
    constructor(username,password,position){
        this.username = username;
        this.password = password;
        this.position = position;
        this.login = false;
    }
    static read_file(cb){
        fs.readFile('./employee.json',(err,data)=> {
            if(err)throw err;
            else cb(JSON.parse(data));
        });
    }
    static write_file(data){
        fs.writeFile('./employee.json',JSON.stringify(data), (err)=> {
            if(err)throw err;
            else console.log(`The file has been saved`);
        });
    }
    static register(username,password,position,cb){
        let employee = new Employee_Model(username, password,position);
        Employee_Model.read_file((data)=> {
            data.push(employee);
            Employee_Model.write_file(data);
            cb(data);
        })
    }
}

module.exports = Employee_Model;
 