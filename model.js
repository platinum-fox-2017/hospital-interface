const Employee = require('./employee');
const Patient = require('./patient');
const fs = require('fs');

class Model{

    static read(path, option, callback1, callback2, callback3, callback4, path2){
        fs.readFile(path,'utf8',(err,data)=>{
            if(err)
                throw err;
            let dataJSON = JSON.parse(data);
            callback1(dataJSON, option,path,callback2, callback3, callback4, path2);
        })
    }

    static write(data, path){
        fs.writeFile(path,JSON.stringify(data),(err)=>{
            if(err)
                throw err;
            console.log("Succeed to save file");
        })
    }

    static register(dataList, newUser, path,callback){
        let username = newUser[0];
        let password = newUser[1];
        let role = new String();
        let flag = false;
        if(newUser.length>3){
            role = newUser.slice(2).join(" ");
        }
        else {
            role = newUser[2];
        }
        let employee = new Employee(username,password,role);
        let isAvailUsername = dataList.map(person => person.username).indexOf(username);

        if(isAvailUsername == -1){
            dataList.push(employee);
            Model.write(dataList, path);
            flag = true;
        }
        else{
            flag = false;
        }
        callback(dataList,employee,flag);
    }

    static change_login_status(data,index,flag){
        for(let i = 0; i < data.length; i++){
            if(i == index){
                data[i].status_login = flag;
            }
            else {
                data[i].status_login = false;
            }
        }
    }

    static login(dataList, userLogin, path, callback){
        let username = userLogin[0];
        let password = userLogin[1];
        let flag = false;
        for(let i = 0; i < dataList.length; i++){
            if(dataList[i].username == username){
                if(dataList[i].password==password)
                    {
                        Model.change_login_status(dataList, i,true);
                        Model.write(dataList, path);
                        flag = true;
                    }
            }
        }
        callback(username, flag);

    }

    static logout(dataList,userLogin,path,callback){
        let userLogout = new String();
        for(let i = 0; i < dataList.length; i++){
            if(dataList[i].status_login==true){
                Model.change_login_status(dataList, i, false);
                userLogout = dataList[i].username;
                Model.write(dataList,path)
            }
        }
        callback(userLogout);
    }

    static check_access(dataList,option,path,callback,callback2,callback3,path2){
        let flag = false;
        for(let i = 0; i < dataList.length; i++){
            if(dataList[i].status_login == true){
                if(dataList[i].role == 'dokter')
                    flag = true;
            }
        }
        option.push(flag);
        callback(path2,option,callback2,callback3);
    }

    static addPatient(dataList, option, path, callback){
        let flag = option[option.length-1];
        let lastID = dataList[dataList.length-1].id;
        if(flag){
            let id = lastID+1;
            let name = option[0];
            let diagnosis = option.slice(1,option.length-1).join(" ");
            dataList.push(new Patient(id,name,diagnosis));
            Model.write(dataList, path);
        }
        callback(dataList,flag);
    }

}

module.exports = Model;
