class HospitalModel {
    constructor(name, location) {
      this._name = name
      this._employees = []
      this._patients = []
      this._location = location
    }

    get employees() {
        return this._employees;
    }

    addEmployee(employeeObj) {        
        this._employees.push(employeeObj);
    }


}

module.exports = HospitalModel;