class EmployeeView {
  static showSuccessRegister(employee,total){
    console.log(`save data success {"username": "${employee.username}","password": "${employee.password}","position": "${employee.position}"}. Total employee: ${total}`);
  }
  
}
module.exports = EmployeeView;
