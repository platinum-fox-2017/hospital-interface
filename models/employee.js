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

	static login(data, callback) {
		EmployeeModel.readFile(function (dataObj) {
			let flag = false;
			for (let i = 0; i < dataObj.length; i++) {
				if (dataObj[i].username == data.username && dataObj[i].password == data.password) {
					dataObj[i].status_login = true;
					flag = true;
				} else {
					dataObj[i].status_login = false;
				}
			}

			EmployeeModel.writeFile(dataObj, function() {
				callback(flag);
			});
		});
	}

	static logout(callback) {
		EmployeeModel.readFile(function (dataObj) {
			let username = '';
			for (let i = 0; i < dataObj.length; i++) {
				if (dataObj[i].status_login) {
					dataObj[i].status_login = false;
					username = dataObj[i].username;
					break;
				}
			}

			EmployeeModel.writeFile(dataObj, function() {
				callback(username);
			});
		});
	}

	static checkLoginNow(callback) {
		EmployeeModel.readFile(function (dataObj) {
			let flag = false;
			for (let i = 0; i < dataObj.length; i++) {
				if (dataObj[i].status_login && dataObj[i].position == 'dokter') {
					flag = true;
					break;
				}
			}

			callback(flag);
		});
	}
}

module.exports = EmployeeModel;