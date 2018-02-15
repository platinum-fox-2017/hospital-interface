class LoginView {
  static viewLogin(input,name){
    if(input===true){
      console.log(`user ${name} logged in succesfully`);
    } else {
      console.log(`username / password wrong`);
    }
  }
}

module.exports = LoginView;
