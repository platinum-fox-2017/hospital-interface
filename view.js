class ToDoView {
  static viewRegister(input1,input2){
    console.log(`save data success ${input1}. Total employee: ${input2}`);
  }

  static viewLogin(input,name){
    if(input===true){
      console.log(`user ${name} logged in succesfully`);
    } else {
      console.log(`username / password wrong`);
    }
  }

  static viewAddPatient(input,angka){
    if(input===false){
      console.log(`tidak memiliki akses untuk add patient`);
    } else {
      console.log(`data pasien berhasil ditambahkan. Total data pasien: ${angka}`);
    }
  }
}

module.exports = ToDoView;
