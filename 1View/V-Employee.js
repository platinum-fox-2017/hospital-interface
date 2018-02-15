// const Controller = require('../2Controller/Controller.js')

class ToView {
    constructor() {

    }

    static showLogRegister(dataObj) {
        var total_employee = 0;
        total_employee += 1;
        var dataJSON = JSON.stringify(dataObj);
        var index = dataObj.length-1;
        // console.log(dataObj.length);
        console.log(`save data success ${JSON.stringify(dataObj[index])}. Total employee: ${index+1}`);
    }


}

module.exports = ToView;

