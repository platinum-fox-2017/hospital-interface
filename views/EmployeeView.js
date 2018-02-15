class EmployeeView {
    static storedEmployee(newEmployee,totalData) {
        console.log("Save data success " + newEmployee.username  + ". Total employee : " + totalData);
    }

    static successLogin(username) {
        if (username != '') {
            console.log("User  " + username + " logged in successfully");
        } else {
            console.log("username / password wrong");      
        }
    }

    static successLogout() {
        console.log("Logout Success !");
        
    }
}

module.exports = EmployeeView;