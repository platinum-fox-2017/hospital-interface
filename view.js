class View {
  constructor() {

  }
  static showRegister(data1, data2) {
    console.log(`save data success ${JSON.stringify(data1)}. Total employee : ${data2.length}`);
  }

  static showLogin(data) {
    // console.log(data);
    if (data !== undefined) {
      console.log(`user ${data} logged in succesfully`);
    }
    else {
      console.log(`username / password wrong`);
    }
  }
}

module.exports = View
