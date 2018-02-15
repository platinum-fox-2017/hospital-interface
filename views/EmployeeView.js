class EmployeeView {
  static showSuccessRegister(employee,total){
    console.log(`save data success {"username": "${employee.username}","password": "${employee.password}","position": "${employee.position}"}. Total employee: ${total}`);
  }
  static showAlertLogin(status,username){
    if(status){
      console.log(`user ${username} logged in successfully`);
    } else {
      console.log('username / password wrong');
    }
  }
}
module.exports = EmployeeView;
