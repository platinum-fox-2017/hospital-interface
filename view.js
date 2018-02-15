class View {
  constructor() {

  }
  static showRegister(data1, data2) {
    console.log(`save data success ${JSON.stringify(data1)}. Total employee : ${data2.length}`);
  }
}

module.exports = View
