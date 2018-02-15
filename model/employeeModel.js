"use strict"

const fs = require('fs');
var employeeFile = './data/employee.json';

class EmployeeModel {
    static readData(callback) {
        fs.readFile(employeeFile, 'utf8', function(err, data) {
            data = JSON.parse(data);
            callback(data);
        })
    }

    static writeData(newData, callback) {
        fs.writeFile(employeeFile, JSON.stringify(newData),function() {
            callback(newData);
        })
    }

    static register(optionArr, callbackView) {
        EmployeeModel.readData(function(data){
            data.push({"username": optionArr[0], "password": optionArr[1], "role": optionArr[2], "login_status": false});
            EmployeeModel.writeData(data, function(data){
                callbackView(data);
            });
        })
    }

    static login(optionArr, callbackView) {
        EmployeeModel.readData(function(data){
            for(let i = 0;i<data.length; i++) {
                if(data[i].username === optionArr[0] && data[i].password === optionArr[1]) {
                    data[i].login_status = true;
                    EmployeeModel.writeData(data, function(data){
                        callbackView(true, data[i])
                        i = data.length+1;
                    })
                }
                if(i === data.length-1) {
                    // callbackView(false);
                }
            }
        })
    }

    static isLoggedIn(optionArr, callback) {
        let flag = false
        EmployeeModel.readData(function(data){
            for(let i = 0; i<data.length; i++) {
                if(data[i].login_status && data[i].role === 'dokter') {
                    callback(true,optionArr)
                }
            }
        })
    }

    static logout(callbackView) {
        EmployeeModel.readData(function(data) {
            for(let i in data) {
                if(data[i].login_status) {
                    data[i].login_status = false
                    i = data.length;
                    EmployeeModel.writeData(data, function(data){
                        callbackView(true);
                    })
                }
                else if(i == data.length-1) {
                    // callbackView(false);
                }
            }
        })
    }
}

module.exports = EmployeeModel;