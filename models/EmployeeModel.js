const fs = require('fs');
class Employee {
  constructor( username, password, position) {
    this.username = username
    this.position = position
    this.password = password
    this.is_login = false
  }
  register (callback){
    fs.readFile('employee_data.json',(err,data)=>{
      data = JSON.parse(data);
      var isSameUsername = false;
      for(var i = 0; i < data.length; i++){
        if(data[i].username === this.username){
          callback(false,this,data.length);
          isSameUsername = true;
          break;
        }
      }
      if(!isSameUsername){
        data.push(this);
        callback(true,this,data.length);
        data = JSON.stringify(data);
        fs.writeFile('employee_data.json',data,(err)=>{});

      }

    })
  }
  login (callback){
    fs.readFile('employee_data.json',(err,data)=>{
      data = JSON.parse(data);
      var isValid = false;
      for(var i = 0; i < data.length; i++){
        if(this.username === data[i].username){
          if(this.password === data[i].password){
           isValid = true; 
           this.updateStatusLogin();
           
          }
        }
      }
      callback(isValid,this.username);
    })
  }
  logout (callback){
    fs.readFile('employee_data.json',(err,data)=>{
      data = JSON.parse(data);
      var isValid = false;
      for(var i = 0; i < data.length; i++){
        if(this.username === data[i].username){
           isValid = true; 
           this.updateStatusLogout();
        }
      }
      callback(this.username);
    })
  }
  static getUserLoggedIn(){
    var data = fs.readFileSync('employee_data.json','utf8');
    data = JSON.parse(data);
    for(var i = 0; i < data.length; i++){
      if(data[i].is_login){
        return data[i];
      }       
    }
  }
  updateStatusLogin(){
    fs.readFile('employee_data.json',(err,data)=>{
      data = JSON.parse(data);
      for(var i = 0; i < data.length; i++){
        if(data[i].username === this.username){
          data[i].is_login = true;
        } else {
          //yang lain otomatis logout
            data[i].is_login = false;
        }
      }
      data = JSON.stringify(data);
      fs.writeFile('employee_data.json',data,(err)=>{});
    })
  }
  updateStatusLogout(){
    fs.readFile('employee_data.json',(err,data)=>{
      data = JSON.parse(data);
      for(var i = 0; i < data.length; i++){
            data[i].is_login = false;
      }
      data = JSON.stringify(data);
      fs.writeFile('employee_data.json',data,(err)=>{});
    })
  }
}
module.exports = Employee;
