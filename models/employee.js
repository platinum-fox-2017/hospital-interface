"use strict"

const fs = require('fs');
const path = './data/employee.json';

class EmployeeModel {
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

	static register(data, callback) {
		EmployeeModel.readFile(function (dataObj) {
			let newObj = {
				// id : (Number(dataObj[dataObj.length - 1].id) + 1).toString(),
				name : data.name,
				position : data.position,
				username : data.username,
				password : data.password,
				status_login : false
			};

			dataObj.push(newObj);
			EmployeeModel.writeFile(dataObj, function() {
				callback(dataObj);
			});
		});
	}
}

module.exports = EmployeeModel;