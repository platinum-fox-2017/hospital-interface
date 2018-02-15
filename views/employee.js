class Views {
  constructor() {

  }
  static register(dataObj, dataArr){
    console.log(`save data success ${JSON.stringify(dataObj)}. Total employee : ${dataArr.length}`)
  }
}

module.exports = Views
