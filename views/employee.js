class Employee {
    static printRegistered(employee, dataArray) {
        console.log(`Save data success ${employee}. Total employee : ${dataArray}`);
    }

    static printLoginEmployee(employee) {
        console.log(employee)

        if (employee === null) {
            console.log(`> Username / password wrong`);
        } else {
            console.log(`> user ${employee.username} logged in successfully`)
        }
    }
}

module.exports = Employee