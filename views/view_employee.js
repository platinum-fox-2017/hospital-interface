class ViewEmployee {

    static register(data) {
        console.log(`save data success. Total employee : ${data.length}`);
    }

    static logIn(employee) {
        if (employee !== undefined) {
            console.log(`user ${employee.username} logged in succesfully`);
        } else {
            console.log(`username / password wrong`);
        }
    }

    static logOut() {
        console.log('<< log out berhasil >>');
    }
}


module.exports = ViewEmployee;