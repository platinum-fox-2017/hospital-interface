const fs = require('fs')

class PatientModel {
    static addNewPatient(name,arrIllness,doctor,callbackView) {        
        fs.readFile('./patient.JSON', 'utf8', function (err, data) {
            if (err) throw err;
            let dataJSON            = JSON.parse(data);
            let newPatient             = {};
            if (dataJSON.length <= 0) {
                newPatient.id              = 1;    
            } else {
                let lastId              = dataJSON[dataJSON.length-1].id;
                newPatient.id              = lastId + 1;
            }
            
            newPatient.name             = name;
            newPatient.illness          = arrIllness;
            newPatient.doctor           = doctor

            dataJSON.push(newPatient);
            var totalData = dataJSON.length;

            let dataToWrite = JSON.stringify(dataJSON);
            
            fs.writeFile('./patient.JSON', dataToWrite , (err) => {
                if (err) throw err;
                callbackView(totalData,doctor);
            });

        });
    }
}

module.exports = PatientModel;