class ModulePatient {
    constructor(id, name, diagnosis) {
        this.id = id
        this.name = name
        this.diagnosis = diagnosis
    }
}

// inputan data
let dataPatient = {}
dataPatient.id =  1
dataPatient.name =  'Jimi Fransiskus'
dataPatient.diagnosis =  'DBD'

let modPatient = new ModulePatient(dataPatient)
console.log(modPatient)

module.exports = ModulePatient