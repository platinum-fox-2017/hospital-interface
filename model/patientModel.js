"use strict"

const fs = require('fs');
var patientFile = './data/patient.json';

class PatientModel {
    static readData(callback) {
        fs.readFile(patientFile, 'utf8', function(err, data){
            data = JSON.parse(data);
            callback(data);
        })
    }

    static writeData(newData, callback) {
        fs.writeFile(patientFile, JSON.stringify(newData), function(){
            callback(newData);
        })
    }

    static addPatient(optionArr, callbackView) {
        PatientModel.readData(function(data){
            data.push({"id":data.length+1, "name": optionArr[0], "disease": optionArr.slice(2).join(' ')})
            console.log(data)
            PatientModel.writeData(data, function(data){
                callbackView(data)
            })
        })
    }
}

module.exports = PatientModel;