"use strict"

const fs = require('fs');
const path = './data/patient.json';

class PatientModel {
  	static readFile(callback) {
		fs.readFile(path, 'utf8', function (err, data) {
			if (err) console.log(err);
			else {
				let dataObj = JSON.parse(data);
				callback(dataObj);
			}
		});
	}

	static writeFile(data, callback) {
		fs.writeFile(path, JSON.stringify(data), (err) => {
		  if (err) console.log(err);
		  callback();
		});
	}

	static addPatient(data, callback) {
		PatientModel.readFile(function (dataObj) {
			let newObj = {
				id : dataObj.length == 0 ? '1' : (Number(dataObj[dataObj.length - 1].id) + 1).toString(),
				name : data.name,
				diagnosis : data.diagnosis
			};

			dataObj.push(newObj);
			PatientModel.writeFile(dataObj, function() {
				callback(dataObj.length);
			});
		});
	}
}

module.exports = PatientModel;