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

    static login(optionArr, callbackView1, callbackView2) {
        EmployeeModel.isLoggedIn(function(data){
            for(let i = 0;i<data.length; i++) {
                if(data[i].username === optionArr[0] && data[i].password === optionArr[1]) {
                    data[i].login_status = true;
                    EmployeeModel.writeData(data, function(data){
                        callbackView2(true, data[i])
                    })
                    return
                }
            }
            return callbackView2(false)
        }, callbackView1)
    }

    static isLoggedIn(callback1, callback2) {
        EmployeeModel.readData(function(data) {
            let flag = false;
            let loggedInIndex = -1;
            for(let i =0; i<data.length; i++) {
                if(data[i].login_status) {
                    loggedInIndex = i;
                    i = data.length;
                    flag =true;
                }
            }
            if(flag) return callback2(data, loggedInIndex);
            return callback1(data)
        })
    }

    static isDoctor(optionArr, callbackView, callback) {
        EmployeeModel.isLoggedIn(callbackView, function(data, loggedInIndex){
            if(data[loggedInIndex].role === 'dokter') {
                return callback(optionArr);
            } else return callbackView()
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
                    return
                }
            }
            return callbackView(false);
        })
    }
}

module.exports = EmployeeModel;