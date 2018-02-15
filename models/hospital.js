const fs = require('fs')
class M_Hospital {
    constructor(name, location) {
      this.name = name || 'RS Pondok Indah'
      this.employees = []
      this.patients = []
      this.location = location || 'Jakarta Selatan'
    }
   
    registerEmployee(newEmployee, callback){
        fs.readFile('./employee.json', (err,data)=>{
            if(err){
                console.log(err)
            }else{
                this.employees.push(newEmployee)           
                let dataJson = JSON.parse(data)
                dataJson.push(newEmployee)
                fs.writeFile('./employee.json', JSON.stringify(dataJson), err=>{
                    callback(JSON.stringify(newEmployee), dataJson.length)
                })
            }
            
        })
    }
}

module.exports = M_Hospital