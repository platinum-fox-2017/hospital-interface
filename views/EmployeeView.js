class EmployeeView {
  static showSuccessRegister(status,employee,total){
    if(status){
    console.log(`save data success {"username": "${employee.username}","password": "${employee.password}","position": "${employee.position}"}. Total employee: ${total}`);
    } else {
      console.log('Username Yang Anda Masukkan Sudah Ada');
    }
  }
  static showAlertLogin(status,username){
    if(status){
      console.log(`user ${username} logged in successfully`);
    } else {
      console.log('username / password wrong');
    }
  }
  static showAlertLogout(username){
      console.log(`user ${username} log out successfully`);
  }
}
module.exports = EmployeeView;
