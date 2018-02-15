"use strict"

class EmployeeView {
	static showListMessage(dataObj) {
		for (let i = 0; i < dataObj.length; i++) {
			EmployeeView.showMessage(`${dataObj[i].id}. [${dataObj[i].status ? 'x' : ' '}] ${dataObj[i].todo} [${dataObj[i].tag.join(' ')}]`);
		}
	}

	static showMessage(data) {
		console.log(data);
	}
}

module.exports = EmployeeView;